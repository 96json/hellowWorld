import {Component} from '@angular/core';
import {App, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AddEmployeesPage} from '../add-employees/add-employees';
import {Observable} from "rxjs/Observable";
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {AngularFireAuth} from "angularfire2/auth";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


/**
 * Generated class for the EmployeesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-employees-list',
  templateUrl: 'employees-list.html',
})
export class EmployeesListPage {

  employeelist$: Observable<any>;
  myInput: string = '';
  loader:any

  constructor(public navCtrl: NavController, private employees: EmployeeListService, public navParams: NavParams,
              private afAuth: AngularFireAuth, public app: App,public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesListPage');
    this.employeelist$ = this.employees.getEmployeeList();
    this.loader.dismiss();
  }

  NavtoAddEmployees() {

    this.navCtrl.push(AddEmployeesPage);

  }

  onInput() {

    const elementToEval = {
      FullName: this.myInput,
      Country: this.myInput
    };
    this.employeelist$ = this.employees.getEmployeeList()
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

  shouldShowCancel() {

  }

  onCancel(event) {
    this.employeelist$ = this.employees.getEmployeeList();
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.popToRoot()
    });

  }

  doRefresh(refresher){
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
