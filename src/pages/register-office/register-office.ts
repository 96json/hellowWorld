///<reference path="../../../node_modules/@firebase/auth-types/index.d.ts"/>
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from "angularfire2/database";
import {officeListService} from '../../services/offices-list/offices-list.services';
import {UsersTabsPage} from '../users-tabs/users-tabs';
import {officeitem} from "../../models/officeItem/officeItem";

/**
 * Generated class for the RegisterOfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-office',
  templateUrl: 'register-office.html',
})
export class RegisterOfficePage {
  office = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
              private toastCtrl: ToastController, private db: AngularFireDatabase, private officeService: officeListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterOfficePage');
  }

  addOffice(office: officeitem) {
    const result = this.afAuth.auth.createUserWithEmailAndPassword(
      office.email,
      office.password
    ).then(ref => {
      this.officeService.addofficeitem(office,ref)
        .then(ref => {
          this.afAuth.auth.currentUser.updateProfile({
            displayName: office.FullName,
            photoURL: 'http://www.ravhar.com/slide%20images/back2.jpg'
          }).then(()=>this.navCtrl.setRoot(UsersTabsPage))
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
