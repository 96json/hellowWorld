import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficesMenuPage } from './offices-menu';

@NgModule({
  declarations: [
    OfficesMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficesMenuPage),
  ],
})
export class OfficesMenuPageModule {}
