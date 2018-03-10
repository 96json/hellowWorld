import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeesListPage } from './employees-list';

@NgModule({
  declarations: [
    EmployeesListPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeesListPage),
  ],
})
export class EmployeesListPageModule {}
