import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CvEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface employeeitem {
  key?: string;
  FullName: string;
  age: number;
  salary: number;
  image: string
}

@IonicPage()
@Component({
  selector: 'page-cv-employee',
  templateUrl: 'cv-employee.html',
})
export class CvEmployeePage {

  employee = {} as employeeitem;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvEmployeePage');
    this.employee= this.navParams.get('item');
  }

}
