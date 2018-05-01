import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {UserInfoProvider} from "../../providers/user-info/user-info";
import {employeeitem, officeitem} from "../../models/officeItem/officeItem";


@Injectable()
export class EmployeeListService {

  dataUser: any;
  private employeeslistRef = this.db.list<officeitem>('employees-list');

  constructor(private db: AngularFireDatabase, private userInfoProvider: UserInfoProvider) {
    this.dataUser = this.userInfoProvider.getDataUser();
  }

  getEmployeeList() {

    return this.employeeslistRef;

  }

  addEmployeeItem(employee: employeeitem) {
    console.log(employee);
    debugger;
    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.FullName}`).set(employee);
  }

  editEmployeeItem(employee: officeitem) {
    return this.employeeslistRef.update(employee.key, employee);
  }

  deleteEmployeeItem(employee: officeitem) {

    return this.employeeslistRef.remove(employee.key);
  }
}
