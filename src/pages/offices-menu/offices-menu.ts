import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';

import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";

/**
 * Generated class for the OfficesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-offices-menu',
  templateUrl: 'offices-menu.html',
})
export class OfficesMenuPage {

  officelist$: Observable<any[]>;


  constructor(public navCtrl: NavController, private employees: EmployeeListService, public navParams: NavParams, private afAuth: AngularFireAuth) {
    this.officelist$ = this.employees.getListOffices()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
    });
  }
}
