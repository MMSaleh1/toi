import { CheckoutPage } from './../checkout/checkout';
import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public cart : CartProvider

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cart = CartProvider.getInstance();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  trackbyindex(index) {
    return index; 
  }

  increment(item){
    this.cart.addItem(item.item)
  }
  decrease(index){
    this.cart.removeItem(index,false);
  }
  delete(index){
    this.cart.removeItem(index,true);
  }

  Checkout(){
    this.navCtrl.push(CheckoutPage);
  }


}
