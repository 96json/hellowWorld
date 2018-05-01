import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEditRequestPage } from './user-edit-request';

@NgModule({
  declarations: [
    UserEditRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEditRequestPage),
  ],
})
export class UserEditRequestPageModule {}
