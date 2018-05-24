import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

@IonicPage()
@Component({
  selector: 'page-employee-of-office',
  templateUrl: 'employee-of-office.html',
})

export class EmployeeOfOfficePage {
  employeelist$: Observable<employeeitem[]>;

  paramOfItem;
  constructor(public navCtrl: NavController, private employeeService: EmployeeListService,public navParams: NavParams) {
    this.paramOfItem = this.navParams.get('item');
    this.employeelist$ = this.employeeService.getEmployeeList(this.paramOfItem)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }


}
