import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {UserInfoProvider} from "../../providers/user-info/user-info";
import {employeeitem} from "../../models/officeItem/officeItem";
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
    employee.recruiter = {uid, email, displayName};
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

  requestEmployee(employee: employeeitem) { // solo ejecuta este metodo el usuario
    const id = moment().format();
    const {uid, email, displayName} = this.dataUser.toJSON();
    const assisgObjectToApplicant = {...{applicant: {uid, email, displayName}}, ...employee,...{dateRequire:id}};
    const {recruiter} = employee;
    let addToOffice = this.db.object<employeeitem>(`list-request/${recruiter.uid}/${id}`).set(assisgObjectToApplicant);
    let addToUser = this.db.object<employeeitem>(`list-request/${this.dataUser.uid}/${id}`).set({...employee,...{dateRequire:id}});

    return Promise.all([addToOffice, addToUser])
  }


  getRequestList() {

    return this.db.list<any>(`list-request/${this.dataUser.uid}`).valueChanges()
  }


}
