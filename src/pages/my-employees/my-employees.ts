import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {Observable} from 'rxjs/Observable';
import {AddEmployeesPage} from "../add-employees/add-employees";
/**
 * Generated class for the MyEmployeesPage page.
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
@IonicPage()
@Component({
  selector: 'page-my-employees',
  templateUrl: 'my-employees.html',
})
export class MyEmployeesPage {


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