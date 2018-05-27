import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
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
  loader:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms: SMS,
              public employeeServices : EmployeeListService,
              private toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    this.items = this.employeeServices.getRequestList();
    this.typeUser = this.employeeServices.typeCurrenteUser;
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }


  ionViewDidLoad() {
    this.loader.dismiss();
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
  SendSms({recruiter}){
    this.sendMessage('',recruiter.numberPhone)
  }

  call(item){
    console.log(item)
    //action to call
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
