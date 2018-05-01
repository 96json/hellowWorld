import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {OfficesMenuPage} from '../offices-menu/offices-menu';
import {PapersinfoPage} from '../papersinfo/papersinfo';
import {MyRequestsPage} from '../my-requests/my-requests';
import {EmployeesListPage} from "../employees-list/employees-list";
import {EmployeeListService} from "../../services/employees-list/employees-list.services";
import {UserInfoProvider} from "../../providers/user-info/user-info";

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
  user: any = false;
  clientMenuRoot = OfficesMenuPage;
  papersinfoRoot = PapersinfoPage;
  myRequestsRoot = MyRequestsPage;
  officesMenuRoot;

  constructor(public navCtrl: NavController, private employeeListService: EmployeeListService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersTabsPage');

    this.employeeListService.currentUser().snapshotChanges()
      .subscribe(actions => {
        actions.forEach(action => {
          if(action.key === 'rules'){
            if(action.payload.val().write === true){
              this.officesMenuRoot = EmployeesListPage;
              this.myRequestsRoot = MyRequestsPage;
              this.user = true
            }
          }
        });
      });

  }
}
