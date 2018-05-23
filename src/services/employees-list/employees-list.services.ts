import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {UserInfoProvider} from "../../providers/user-info/user-info";
import {employeeitem, officeitem} from "../../models/officeItem/officeItem";
import * as moment from 'moment'


@Injectable()
export class EmployeeListService {

  dataUser: any;

  constructor(private db: AngularFireDatabase, private userInfoProvider: UserInfoProvider) {
    this.dataUser = this.userInfoProvider.getDataUser();

  }

  getEmployeeList(uidOffice?) {
    if (uidOffice) {
      return this.db.list<any>(`list-offices/${uidOffice.uid}/list-employer`).valueChanges()
    }
    return this.db.list<any>(`list-offices/${this.dataUser.uid}/list-employer`).valueChanges()
  }

  addEmployeeItem(employee: employeeitem) {
    employee.key = moment().format();
    const {uid, email, displayName} = this.dataUser.toJSON();
    employee.owner = {uid, email, displayName};
    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.key}`).set(employee);
  }

  editEmployeeItem(employee: employeeitem) {
    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.key}`).update(employee)
  }

  deleteEmployeeItem(employee: employeeitem) {

    return this.db.object<employeeitem>(`list-offices/${this.dataUser.uid}/list-employer/${this.dataUser.uid}${employee.key}`).remove()
  }

  currentUser() {
    return this.db.list<employeeitem>(`users/${this.dataUser.uid}`)
  }


  getListOffices() {
    return this.db.list<any>(`list-offices`).valueChanges()
  }

  requestEmployee(employee: employeeitem) {
    const {key, owner: {uid}} = employee;
    let addToOffice = this.db.object<employeeitem>(`list-offices/${uid}/list-request/${this.dataUser.uid}/${key}`).set(employee);
    let addToUser = this.db.object<employeeitem>(`users/${this.dataUser.uid}/list-request/${uid}/${key}`).set(employee);

    return Promise.all([addToOffice, addToUser])
  }

}
