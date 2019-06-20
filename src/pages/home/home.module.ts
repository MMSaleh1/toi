
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
