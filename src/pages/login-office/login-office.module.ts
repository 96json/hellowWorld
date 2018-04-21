import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOfficePage } from './login-office';

@NgModule({
  declarations: [
    LoginOfficePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOfficePage),
  ],
})
export class LoginOfficePageModule {}
