import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {UsersTabsPage} from "../users-tabs/users-tabs";

/**
 * Generated class for the RequestEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
  image: string
}
@IonicPage()
@Component({
  selector: 'page-request-employee',
  templateUrl: 'request-employee.html',
})
export class RequestEmployeePage {
  employee = {} as employeeitem;
  constructor(public navCtrl: NavController, public navParams: NavParams,private employeeService: EmployeeListService) {
  }

  ionViewWillLoad() {
    this.employee= this.navParams.get('item');
  }

  requestEmployee(employee){
    this.employeeService.requestEmployee(employee)
      .then(()=>{
        this.navCtrl.setRoot(UsersTabsPage);
      })
      .catch(()=>console.log('no add request'))
  }

}
