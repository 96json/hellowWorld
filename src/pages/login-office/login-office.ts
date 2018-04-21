import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {UsersTabsPage} from '../users-tabs/users-tabs';
import {RegisterOfficePage} from '../register-office/register-office';
/**
 * Generated class for the LoginOfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface officeitem {
  key?:string;
  FullName:string;
  address:string ;
  telephone:number;
  email:string;
  password:string ;
}
@IonicPage()
@Component({
  selector: 'page-login-office',
  templateUrl: 'login-office.html',
})
export class LoginOfficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
  }
  office = {} as officeitem;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginOfficePage');
  }
  login(office: officeitem) {

    this.afAuth.auth.signInWithEmailAndPassword(office.email, office.password)
      .then(() => {
        this.openUsers()
      }).catch((e) => {
      console.error(e);
    })


  }
  registerOffice(office: officeitem) {


    this.navCtrl.push(RegisterOfficePage);
  }
  openUsers() {

    this.navCtrl.setRoot(UsersTabsPage);


  }
}

