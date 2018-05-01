import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from 'rxjs/Observable';
import {AddEmployeesPage} from "../add-employees/add-employees";
import {EditEmployeesPage}from "../edit-employees/edit-employees";
import { LoginOfficePage } from '../login-office/login-office';
import {EmployeeOfOfficePage} from '../employee-of-office/employee-of-office';
/**
 * Generated class for the OfficesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
}


//@IonicPage()
@Component({
  selector: 'page-offices-menu',
  templateUrl: 'offices-menu.html',
})
export class OfficesMenuPage {

  employeelist$: Observable<employeeitem[]>;


  constructor(public navCtrl: NavController, private employees: EmployeeListService,public navParams: NavParams) {
    this.employeelist$ = this.employees.getEmployeeList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }


  NavtoAddEmployees() {

    this.navCtrl.push(AddEmployeesPage);

  }

}
