import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeEditRequestPage } from './office-edit-request';

@NgModule({
  declarations: [
    OfficeEditRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeEditRequestPage),
  ],
})
export class OfficeEditRequestPageModule {}
