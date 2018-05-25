import {Component, Input} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {Camera, CameraOptions} from 'ionic-native';
import firebase from 'firebase';
import {OfficesMenuPage} from "../offices-menu/offices-menu";
import {employeeitem} from "../../models/officeItem/officeItem";

/**
 * Generated class for the AddEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@IonicPage()
@Component({
  selector: 'page-add-employees',
  templateUrl: 'add-employees.html',
})


export class AddEmployeesPage {

  employee = {} as employeeitem;
  captureDataUrl: string;
  alertCtrl: AlertController;

  @Input('useURI') useURI: Boolean = true;

  constructor(private employeeService: EmployeeListService, public navCtrl: NavController, alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;

  }


  addOneEmployee(employee: employeeitem) {

    let storageRef = firebase.storage().ref();
    const filename = this.employee.FullName + this.employee.age;

    const imageRef = storageRef.child(`employees-list/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot) => {
        this.employee.image = snapshot.downloadURL;
        this.employeeService.addEmployeeItem(employee)
          .then(ref => {
            this.navCtrl.setRoot(OfficesMenuPage);
          });
        this.showSuccesfulUploadAlert();
      });


  }

  getPicture(sourceType) {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      sourceType: sourceType,
      allowEdit:true,
      correctOrientation:true
    };

    Camera.getPicture(cameraOptions)
      .then((captureDataUrl) => {
        this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
      }, (err) => {
        console.log(err);
      });
  }


  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Image load to database',
      buttons: ['OK']
    });
    alert.present();
    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }
}
