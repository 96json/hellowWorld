import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {officeitem} from "../../models/officeItem/officeItem";


@Injectable()

export class officeListService {
  private officeslistRef = this.db.list<officeitem>('offices-list')
  private officeslistRef1;

  constructor(private db: AngularFireDatabase) {

  }

  getofficeList() {

    return this.officeslistRef;

  }

  addofficeitem(office: officeitem) {
    let s = office.FullName + office.address;
    const addOfficesToList = this.db.list<officeitem>('list-offices').set(s, office);
    office.rules = {write: true, read: true};
    const addOfficesToUserList = this.db.list<officeitem>('users').set(s, office);
    return addOfficesToList.then(() => addOfficesToUserList.then((res)=> res))
  }

  editofficeitem(office: officeitem) {
    return this.officeslistRef.update(office.key, office);
  }

  deleteofficeitem(office: officeitem) {

    return this.officeslistRef.remove(office.key);
  }
}
