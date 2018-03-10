import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddEmployeesPage } from '../add-employees/add-employees';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesListPage');
  }*/

  NavtoAddEmployees(){

    this.navCtrl.push (AddEmployeesPage);
    
  }

}
