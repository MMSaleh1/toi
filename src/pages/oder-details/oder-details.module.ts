import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OderDetailsPage } from './oder-details';

@NgModule({
  declarations: [
    OderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OderDetailsPage),
  ],
})
export class OderDetailsPageModule {}
