import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
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
  phoneNumber:number;
  status:string;
  items :Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms: SMS, public employeeServices : EmployeeListService) {
    this.items = this.employeeServices.getRequestList()
    this.status = 'opera'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRequestsPage');

  }

  accept(item){
    this.employeeServices.changesStatus('Accept',item)
  }

  reject(item){
    this.employeeServices.changesStatus('Reject',item)
      .then(()=>{
        //here add method send sms
      })


  }

   sendMessage(){

   this.mysms.send(String(this.phoneNumber),this.Message);
  }
}
