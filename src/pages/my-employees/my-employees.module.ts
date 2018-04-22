import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyEmployeesPage } from './my-employees';

@NgModule({
  declarations: [
    MyEmployeesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyEmployeesPage),
  ],
})
export class MyEmployeesPageModule {}
