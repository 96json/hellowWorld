import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

import {EmployeeListService} from '../../services/employees-list/employees-list.services';
import {Observable} from 'rxjs/Observable';

/**
 * Generated class for the EmployeeOfOfficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
}

@IonicPage()
@Component({
  selector: 'page-employee-of-office',
  templateUrl: 'employee-of-office.html',
})

export class EmployeeOfOfficePage {
  employeelist$: Observable<employeeitem[]>;
  myInput: string = '';
  loader:any;
  paramOfItem;

  constructor(public navCtrl: NavController, private employeeService: EmployeeListService,public navParams: NavParams,
              public loadingCtrl: LoadingController) {
    this.paramOfItem = this.navParams.get('item');
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfficesMenuPage');
    this.employeelist$ = this.employeeService.getEmployeeList(this.paramOfItem)
    this.loader.dismiss();
  }

  onInput() {

    const elementToEval = {
      FullName: this.myInput,
      Country: this.myInput
    };
    this.employeelist$ = this.employeeService.getEmployeeList(this.paramOfItem)
      .map(items => {
        return items.filter((item) => {
          for (let key in elementToEval) {
            let field = item[key];
            if (typeof field == 'string' && field.toLowerCase().indexOf(elementToEval[key].toLowerCase()) >= 0) {
              return item;
            } else if (field == elementToEval[key]) {
              return item;
            }
          }
        })
      })
  }

  shouldShowCancel() {

  }

  onCancel(event) {
    this.employeelist$ = this.employeeService.getEmployeeList(this.paramOfItem)
  }


}
