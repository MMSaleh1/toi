import { CartProvider } from './../../providers/cart/cart';
import { Category, Product } from './../../providers/items-api/items-api';
import { Component } from '@angular/core';
import { NavController, NavParams, Alert } from 'ionic-angular';
import { timer } from 'rxjs';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {
  category: Category;
  products: Array<Product>;
  cart: CartProvider;
  gender: string;
  public cartProv: CartProvider;


  constructor(public navCtrl: NavController, public navparms: NavParams) {
    this.category = this.navparms.get("cate");
    this.products = new Array();
    this.products = this.category.children;
    console.log(this.products);
    console.log(this.category);
    this.cart = CartProvider.getInstance();
    this.cartProv = CartProvider.getInstance();

  }

  navToCart() {
    this.navCtrl.push(CartPage);
  }

  addtoCart(item: Product) {
    this.cart.addItem(item);
    console.log(this.cart);
    // setTimeout(()=>{

    // },1000)
    // alert('Item Has been added to your cart');
    // this.na svCtrl.popToRoot();
  }

  checkIfExsist(id) {
    for (let i = 0; i < this.cart.cartItems.length; i++) {
      if (id == this.cart.cartItems[i].item.id) {
        return false
      }
    }
    return true;
  }




}
