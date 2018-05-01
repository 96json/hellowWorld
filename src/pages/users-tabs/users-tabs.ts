import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {OfficesMenuPage} from '../offices-menu/offices-menu';
import {PapersinfoPage} from '../papersinfo/papersinfo';
import {MyRequestsPage} from '../my-requests/my-requests';
import {EmployeesListPage} from "../employees-list/employees-list";

/**
 * Generated class for the UsersTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-tabs',
  templateUrl: 'users-tabs.html'
})
export class UsersTabsPage {
  data: any;
  user: any;
  officesMenuRoot;
  papersinfoRoot;
  myRequestsRoot;
  clientMenuRoot;

  constructor(public navCtrl: NavController) {

    if (this.user) {

      this.officesMenuRoot = OfficesMenuPage;
      this.papersinfoRoot = PapersinfoPage;
      this.myRequestsRoot = MyRequestsPage;

    } else {
      this.clientMenuRoot = EmployeesListPage;
      this.myRequestsRoot = MyRequestsPage;
    }
  }

}
