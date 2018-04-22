import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from 'rxjs/Observable';
import {RequestEmployeePage} from '../request-employee/request-employee';
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
@IonicPage()
@Component({
  selector: 'page-employee-of-office',
  templateUrl: 'employee-of-office.html',
})

export class EmployeeOfOfficePage {
  employeelist$: Observable<employeeitem[]>;
  

  constructor(public navCtrl: NavController, private employees: EmployeeListService,public navParams: NavParams) {
    this.employeelist$ = this.employees.getEmployeeList()
      .snapshotChanges().map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }


}
