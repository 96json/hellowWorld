import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

interface employeeitem {
    key?:string;
    FullName:string;
    age: number;
    salary:number;
  }
@Injectable()

export class EmployeeListService {
private employeeslistRef = this.db.list<employeeitem>('employees-list')
constructor (private db : AngularFireDatabase){

}
    getEmployeeList (){

return  this.employeeslistRef;

}
addEmployeeItem(employee : employeeitem){
    return this.employeeslistRef.push(employee);
}

}