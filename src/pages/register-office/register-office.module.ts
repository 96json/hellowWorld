import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterOfficePage } from './register-office';

@NgModule({
  declarations: [
    RegisterOfficePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterOfficePage),
  ],
})
export class RegisterOfficePageModule {}
