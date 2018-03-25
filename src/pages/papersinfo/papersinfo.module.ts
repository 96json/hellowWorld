import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PapersinfoPage } from './papersinfo';

@NgModule({
  declarations: [
    PapersinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PapersinfoPage),
  ],
})
export class PapersinfoPageModule {}
