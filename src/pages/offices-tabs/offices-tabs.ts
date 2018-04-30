import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MyEmployeesPage } from '../my-employees/my-employees';
import { OfficeRequestsPage } from '../office-requests/office-requests';
import { SmsPage } from '../sms/sms';
/**
 * Generated class for the OfficesTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offices-tabs',
  templateUrl: 'offices-tabs.html'
})
export class OfficesTabsPage {

  myEmployeesRoot = MyEmployeesPage;
  officeRequestsRoot = OfficeRequestsPage;
  smsRoot = SmsPage;


  constructor(public navCtrl: NavController) {}

}
