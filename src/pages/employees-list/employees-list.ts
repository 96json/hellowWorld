import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AddEmployeesPage} from '../add-employees/add-employees';
import {Observable} from "rxjs/Observable";
import {employeeitem} from "../../models/officeItem/officeItem";


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

  employeelist$: Observable<employeeitem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /* ionViewDidLoad() {
     console.log('ionViewDidLoad EmployeesListPage');
   }*/

  NavtoAddEmployees() {

    this.navCtrl.push(AddEmployeesPage);

  }

  openItem() {
    console.log('this')
    this.navCtrl.push('InfoEmployeePage', {
      item: 'item',
      from:'list-master'
    });
  }

}
