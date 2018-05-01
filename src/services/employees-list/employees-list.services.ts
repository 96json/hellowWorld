import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {UserInfoProvider} from "../../providers/user-info/user-info";
import {employeeitem} from "../../models/officeItem/officeItem";


@Injectable()
export class EmployeeListService {

  dataUser: any;

  constructor(private db: AngularFireDatabase, private userInfoProvider: UserInfoProvider) {
    this.dataUser = this.userInfoProvider.getDataUser();

  }

  getEmployeeList() {
    console.log(`list-offices/${this.dataUser.uid}/list-employer`)
   return this.db.list<any>(`list-offices/${this.dataUser.uid}/list-employer`).valueChanges()
  }

  addEmployeeItem(employee: employeeitem) {
    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.FullName}`).set(employee);
  }

  editEmployeeItem(employee: employeeitem) {
    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.FullName}`).update(employee)
  }

  deleteEmployeeItem(employee: employeeitem) {

    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.FullName}`).remove()
  }

  currentUser(){
    return this.db.list<employeeitem>(`users/${this.dataUser.uid}`)
  }


}
