import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductOffersPage } from './product-offers';
import { AutoCompleteModule } from 'ionic2-auto-complete';


@NgModule({
  declarations: [
    ProductOffersPage,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(ProductOffersPage),
  ],
})
export class ProductOffersPageModule {}
