import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeRequestsPage } from './office-requests';

@NgModule({
  declarations: [
    OfficeRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeRequestsPage),
  ],
})
export class OfficeRequestsPageModule {}
