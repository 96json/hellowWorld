import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OfficesMenuPage } from '../offices-menu/offices-menu';
import { PapersinfoPage } from '../papersinfo/papersinfo';
import { MyRequestsPage } from '../my-requests/my-requests';
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

  officesMenuRoot = OfficesMenuPage;
  papersinfoRoot = PapersinfoPage;
  myRequestsRoot = MyRequestsPage;


  constructor(public navCtrl: NavController) {}

}
