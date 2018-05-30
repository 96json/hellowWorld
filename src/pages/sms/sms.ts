import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import {MyRequestsPage} from '../my-requests/my-requests';
/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private mysms: SMS) {
    this.phoneNumber = this.navParams.get('item');
  }
  Message: string ;
  phoneNumber:number;
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyRequestsPage');
  }
   sendMessage(){

   this.mysms.send(String(this.phoneNumber),this.Message);
   this.navCtrl.setRoot(MyRequestsPage);
  }

}
