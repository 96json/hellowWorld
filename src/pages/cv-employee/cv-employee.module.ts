import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvEmployeePage } from './cv-employee';

@NgModule({
  declarations: [
    CvEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(CvEmployeePage),
  ],
})
export class CvEmployeePageModule {}
