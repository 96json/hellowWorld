import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmployeeListService } from '../../services/employees-list/employees-list.services';
import { AngularFireDatabase } from "angularfire2/database";
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the OfficesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface employeeitem {
  key?:string;
  FullName:string;
  age: number;
  salary:number;
}
@IonicPage()
@Component({
  selector: 'page-offices-menu',
  templateUrl: 'offices-menu.html',
})
export class OfficesMenuPage {

employeelist$:Observable<employeeitem[]>;

constructor(public navCtrl: NavController, public navParams: NavParams,private employees:EmployeeListService) {
 this.employeelist$ =this.employees.getEmployeeList()
.snapshotChanges().map(
  changes => {
    return changes.map(c=> ({
      key:c.payload.key,
       ...c.payload.val(),
    }));
  }
); 
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
  }

}
