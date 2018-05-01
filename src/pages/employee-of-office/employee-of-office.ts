import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the EmployeeOfOfficePage page.
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
@Component({
  selector: 'page-employee-of-office',
  templateUrl: 'employee-of-office.html',
})

export class EmployeeOfOfficePage {
  employeelist$: Observable<employeeitem[]>;


  constructor(public navCtrl: NavController, private employees: EmployeeListService,public navParams: NavParams) {
    this.employeelist$ = this.employees.getEmployeeList()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }


}
