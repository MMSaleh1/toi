import { Category, Product } from './../../providers/items-api/items-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html'
})
export class AppointmentPage {
  category : Category;
  products : Array<Product>;

  constructor(public navCtrl: NavController , public navparms :NavParams) {
    this.category = this.navparms.get("cate");
    this.products = new Array();
    this.products = this.category.children;
    console.log(this.products);
    console.log(this.category); 

  }
  

}
