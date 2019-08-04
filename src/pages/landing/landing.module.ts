import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [
    LandingPage,
  ],
  imports: [
    IonicPageModule.forChild(LandingPage),
    SwiperModule
  ],
})
export class LandingPageModule {}
