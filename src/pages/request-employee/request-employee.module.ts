import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestEmployeePage } from './request-employee';

@NgModule({
  declarations: [
    RequestEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(RequestEmployeePage),
  ],
})
export class RequestEmployeePageModule {}
