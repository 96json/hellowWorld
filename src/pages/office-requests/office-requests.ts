import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddEmployeesPage} from "../add-employees/add-employees";
import {EditEmployeesPage}from "../edit-employees/edit-employees";
import {OfficeEditRequestPage}from "../office-edit-Request/office-edit-request";
/**
 * Generated class for the OfficeRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-office-requests',
  templateUrl: 'office-requests.html',
})
export class OfficeRequestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficeRequestsPage');
  }

}
