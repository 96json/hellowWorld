import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {OfficesMenuPage} from "../offices-menu/offices-menu";
import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {Camera, CameraOptions} from 'ionic-native';
import firebase from 'firebase';

/**
 * Generated class for the EditEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
  image: string
}
@IonicPage()
@Component({
  selector: 'page-edit-employees',
  templateUrl: 'edit-employees.html',
})
export class EditEmployeesPage {
  employee = {} as employeeitem;
  captureDataUrl: string;
  alertCtrl: AlertController;
  constructor(alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private employeeService: EmployeeListService) {
    this.alertCtrl = alertCtrl;
  }

  ionViewWillLoad() {
    this.employee= this.navParams.get('item');
  }

saveItem(employee: employeeitem){
  let storageRef = firebase.storage().ref();
  console.log(storageRef)



  this.employeeService.editEmployeeItem(employee)
  .then(()=>{
    this.navCtrl.setRoot(OfficesMenuPage);
    
  })

}
deleteItem(employee: employeeitem){
  let storageRef = firebase.storage().ref();
    const NameOffile = this.employee.FullName + this.employee.age;

    // Create a reference to 'images/todays-date.jpg'
    const imageRef1 = storageRef.child(`employees-list/${NameOffile}.jpg`);
    imageRef1.delete().then(()=>{

      this.presentAlert();

    })

    

  this.employeeService.deleteEmployeeItem(employee)
  .then(() =>{
    this.navCtrl.setRoot(OfficesMenuPage);
  })
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
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Delete',
    subTitle: 'Delete operation was successfull',
    buttons: ['Dismiss']
  });
  alert.present();
}
}
