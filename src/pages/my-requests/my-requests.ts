import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {Observable} from "rxjs/Observable";
import {SmsPage} from '../sms/sms';

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
    this.Message = ` Your request is accepted`;
    this.employeeServices.changesStatus('Accepted',item)
      .then(()=>{
        //here add method send sms
        this.sendMessage(this.Message,item.applicant.numberPhone)
      })
  }

  reject(item){
    this.Message = ` Your request is not accepted`;
      this.employeeServices.changesStatus('Rejected',item)
      .then(()=>{
        this.sendMessage(this.Message,item.applicant.numberPhone)
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
  SendSmsApplicatn({applicant}){
    this.navCtrl.setRoot(SmsPage,{item : applicant.numberPhone});
  //  this.sendMessage('',applicant.numberPhone)
  }

  callApplicant(item){
    console.log(item)
    //action to call
  }


  toast(){
    let toast = this.toastCtrl.create({
      message: 'Message send  successfully ',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
