import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  @ViewChild('slides') slides: Slides;
  product_info = {} as any;
  sliders = ['assets/imgs/p1-1.png','assets/imgs/p1-2.png','assets/imgs/p1-3.png','assets/imgs/p2-1.png']
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.product_info = this.navParams.get('prod_details');
    console.log(this.product_info)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  slideNext() {
    this.slides.slideNext();
  }
  slidePrev() {
    this.slides.slidePrev();
  }

}
