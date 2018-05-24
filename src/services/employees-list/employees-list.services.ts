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

  requestEmployee(employee: employeeitem) {
    const {uid, email, displayName} = this.dataUser.toJSON();
    const dataApplicant = {applicant: {uid, email, displayName}};
    const assisgObjectToApplicant = {...dataApplicant, ...employee};
    console.log(assisgObjectToApplicant);
    const {key, recruiter} = employee;
    let addToOffice = this.db.object<employeeitem>(`list-offices/${recruiter.uid}/list-request/${this.dataUser.uid}-${key}`).set(assisgObjectToApplicant);
    let addToUser = this.db.object<employeeitem>(`users/${this.dataUser.uid}/list-request/${recruiter.uid}-${key}`).set(employee);

    return Promise.all([addToOffice, addToUser])
  }


  getRequestList(typePerson?) {
    if (typePerson) {
      return this.db.list<any>(`list-offices/${typePerson.uid}/list-request`).valueChanges()
    }
    return this.db.list<any>(`users/${this.dataUser.uid}/list-request`).valueChanges()
  }


}
