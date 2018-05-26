import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the MyRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-requests',
  templateUrl: 'my-requests.html',
})
export class MyRequestsPage {
  Message: string ;
  items :Observable<any>;
  typeUser :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms: SMS,
              public employeeServices : EmployeeListService,
              private toastCtrl: ToastController) {
    this.items = this.employeeServices.getRequestList();
    this.typeUser = this.employeeServices.typeCurrenteUser;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRequestsPage');

  }

  accept(item){
    this.Message = ` You request isaccepted`;
    this.employeeServices.changesStatus('Accept',item)
      .then(()=>{
        //here add method send sms
        this.sendMessage(this.Message,item.phoneNumber)
      })
  }

  reject(item){
    this.Message = ` You request is not accepted`;
      this.employeeServices.changesStatus('Reject',item)
      .then(()=>{
        this.sendMessage(this.Message,item.phoneNumber)
      })


  }

  sendMessage(message,phoneNumber){

   this.mysms.send(String(phoneNumber),message)
     .then(()=>{
       this.toast()
     })
  }


  toast(){
    let toast = this.toastCtrl.create({
      message: 'Message send with successful ',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
