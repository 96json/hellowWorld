import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {officeitem} from "../../models/officeItem/officeItem";


@Injectable()

export class officeListService {
  private officeslistRef = (params) => this.db.list<officeitem>(params);

  constructor(private db: AngularFireDatabase) {

  }

  getofficeList(params) {

    return this.officeslistRef(params);

  }

  addofficeitem(office: officeitem, ref) {
    office.rules = {write: true, read: true};
    office.uid = ref.uid;
    const addOfficesToList = this.db.list<officeitem>('list-offices').set(ref.uid, office);
    const addOfficesToUserList = this.db.list<officeitem>('users').set(ref.uid, office);
    return addOfficesToList.then(() => addOfficesToUserList.then((res) => res))
  }

  addClientitem(office: officeitem, ref) {
    office.rules = {write: false, read: true};
    office.uid = ref.uid;
    const addOfficesToList = this.db.list<officeitem>('list-client').set(ref.uid, office);
    const addOfficesToUserList = this.db.list<officeitem>('users').set(ref.uid, office);
    return addOfficesToList.then(() => addOfficesToUserList.then((res) => res))
  }

  editofficeitem(office: officeitem) {

  }

  deleteofficeitem(office: officeitem) {

  }
}