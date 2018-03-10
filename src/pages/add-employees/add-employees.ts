import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeListService } from '../../services/employees-list/employees-list.services';
import { EmployeesListPage } from '../employees-list/employees-list';



//mport {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated'; 
/**
 * Generated class for the AddEmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
interface employeeitem {
  key?:string;
  FullName:string;
  age: number;
  salary:number;
}
@Component({
  selector: 'page-add-employees',
  templateUrl: 'add-employees.html',
})


export class AddEmployeesPage   {
  
  employee = {} as employeeitem;

//EmployeesItemRef$: FirebaseListObservable<EmployeeItem[]> ;
//private database: AngularFireDatabase

  constructor(private employeeService:EmployeeListService, public navCtrl: NavController, public navParams: NavParams ) {

    //this.EmployeesItemRef$ = this.database.list('Employee-list');
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad AddEmployeesPage');
  }*/
  addOneEmployee(employee : employeeitem){
this.employeeService.addEmployeeItem(employee).then(ref=>{
  this.navCtrl.push (EmployeesListPage , {key:ref.key});
})


/*this.EmployeesItemRef$.push({
itemName:this.EmployeeItem.itemName,
itemNationality:this.EmployeeItem.itemNationality


});*/

  }
}