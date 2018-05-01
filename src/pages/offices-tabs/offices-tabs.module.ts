import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficesTabsPage } from './offices-tabs';

@NgModule({
  declarations: [
    OfficesTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficesTabsPage),
  ]
})
export class OfficesTabsPageModule {}
