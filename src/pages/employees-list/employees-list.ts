import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {AddEmployeesPage} from '../add-employees/add-employees';
import {Observable} from "rxjs/Observable";
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";


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

  constructor(public navCtrl: NavController, private employees: EmployeeListService, public navParams: NavParams,private afAuth: AngularFireAuth,public app: App) {
    this.employeelist$ = this.employees.getEmployeeList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesListPage');
  }

  NavtoAddEmployees() {

    this.navCtrl.push(AddEmployeesPage);

  }

  logout() {
    this.afAuth.auth.signOut().then(()=>{
    });

  }

}
