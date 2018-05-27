import {Component} from '@angular/core';
import {App, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';

import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";

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
  myInput: string = '';
  loader: any;


  constructor(public navCtrl: NavController, private employees: EmployeeListService, public navParams: NavParams,
              private afAuth: AngularFireAuth, public loadingCtrl: LoadingController,public app: App) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
    this.officelist$ = this.employees.getListOffices();
    this.loader.dismiss();
  }

  onInput() {

    const elementToEval = {
      FullName: this.myInput,
      address: this.myInput
    };
    this.officelist$ = this.employees.getListOffices()
      .map(items => {
        return items.filter((item) => {
          for (let key in elementToEval) {
            let field = item[key];
            if (typeof field == 'string' && field.toLowerCase().indexOf(elementToEval[key].toLowerCase()) >= 0) {
              return item;
            } else if (field == elementToEval[key]) {
              return item;
            }
          }
        })
      })
  }

  onCancel(event) {
    this.officelist$ = this.employees.getListOffices()
  }
  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.app.getRootNav().setRoot(HomePage)
    });
  }
}
