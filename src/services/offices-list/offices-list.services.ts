import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

interface officeitem {
    key?:string;
    FullName:string;
    address:string ;
    telephone:number;
    email:string;
    password:string ;
  }
@Injectable()

export class officeListService {
private officeslistRef = this.db.list<officeitem>('offices-list')
constructor (private db : AngularFireDatabase){

}
    getofficeList (){

return  this.officeslistRef;

}
addofficeitem(office : officeitem){
    return this.officeslistRef.push(office);
}
editofficeitem(office : officeitem){
    return this.officeslistRef.update(office.key,office);
}
deleteofficeitem(office : officeitem){
    
    return this.officeslistRef.remove(office.key);
}
}