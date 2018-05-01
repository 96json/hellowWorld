import {Injectable} from '@angular/core';

/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInfoProvider {

  setDataUser(value: any) {
    this._dataUser = value;
  }

  getDataUser(): any {
    return this._dataUser;
  }

  private _dataUser: any;

  constructor() {
    console.log('Hello UserInfoProvider Provider');
    console.log(this._dataUser);
  }


}
