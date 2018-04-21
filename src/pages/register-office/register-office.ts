import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import {officeListService} from '../../services/offices-list/offices-list.services';
import {UsersTabsPage} from '../users-tabs/users-tabs';
/**
 * Generated class for the RegisterOfficePage page.
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
  selector: 'page-register-office',
  templateUrl: 'register-office.html',
})
export class RegisterOfficePage {
  office = {} as officeitem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth,
    private toastCtrl: ToastController , private db : AngularFireDatabase,private officeService: officeListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterOfficePage');
  }

addOffice(office: officeitem ){
  const result = this.afAuth.auth.createUserWithEmailAndPassword(
    office.email,
    office.password
  
  )  .then(ref => {
    this.officeService.addofficeitem(office)
          .then(ref => {
            this.navCtrl.setRoot(UsersTabsPage);
          });
  }).catch((e) => {
  console.error(e);
})
if (result) {
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
}
