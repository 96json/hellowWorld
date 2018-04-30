import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeOfOfficePage } from './employee-of-office';

@NgModule({
  declarations: [
    EmployeeOfOfficePage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeOfOfficePage),
  ],
})
export class EmployeeOfOfficePageModule {}
