import { CartPage } from './../cart/cart';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController, Platform, Slides, PopoverController, ModalController } from 'ionic-angular';

import { MyappointmentPage } from '../myappointment/myappointment';
import { AboutPage } from '../about/about';
import { TestimonialsPage } from '../testimonials/testimonials';
import { BlogPage } from '../blog/blog';
import { ProfilePage } from '../profile/profile';
import { ServicesPage } from '../services/services';

import { ItemsApiProvider, Category } from './../../providers/items-api/items-api';
import { AutoCompleteProvider } from './../../providers/auto-complete/auto-complete';
import { Database } from '../../providers/database/database';
import { CartProvider } from '../../providers/cart/cart';
import { RatingComponent } from '../../components/rating/rating';
import { ProductDetailsPage } from '../product-details/product-details';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('slides') slides: Slides;
  public ready: boolean = false;
  public cates: Array<Category>;
  public categorySlider: Array<any>;
  public db: Database;
  public cartProv: CartProvider;
  product = { title: 'prod name', desc: 'product description', price: 150 }
  constructor(public navCtrl: NavController
    , public itemProv: ItemsApiProvider
    , public autoCompleteprov: AutoCompleteProvider
    , public toastCtrl: ToastController
    , public platForm: Platform
    , private modalCtrl: ModalController
    , public popOverCtrl: PopoverController
  ) {
    this.cates = new Array();
    this.getItems();
    this.cartProv = CartProvider.getInstance();

  }
  async getItems() {

    this.cates = await this.itemProv.getCategories();
    this.db = Database.getInstance();
    this.db.categories = this.cates;
    this.ready = true;
    console.log(this.cates);
    let tempCates =await this.itemProv.getProdCategories();
    console.log(tempCates);
    return true;
  }


  ionViewDidLoad() {
    console.log(this.platForm);
    // if(this.platForm.is('cordova')){
    //   this.notifProv.getToken();

    //   this.notifProv.listenToNotifications().pipe(tap(msg=>{
    //     const toast = this.toastCtrl.create({
    //       message : msg.body , 
    //       duration : 3000
    //     });
    //     toast.present();
    //   })).subscribe()
    // }

  }

  toServices(cate: Category) {
    this.navCtrl.push(ServicesPage, { 'cate': cate });
  }


  myappointment() {
    this.navCtrl.push(MyappointmentPage);
  }
  about() {
    this.navCtrl.push(AboutPage);
  }
  testimonials() {
    this.navCtrl.push(TestimonialsPage);
  }

  blog() {
    this.navCtrl.push(BlogPage);
  }
  profile() {
    this.navCtrl.push(ProfilePage);
  }
  services() {
    this.navCtrl.push(ServicesPage);
  }
  cart() {
    this.navCtrl.push(CartPage);
  }
  slideNext() {
    this.slides.slideNext();
  }
  slidePrev() {
    this.slides.slidePrev();
  }


  public popOver() {
    let Pover = this.popOverCtrl.create(RatingComponent);
    Pover.present();
  }

  goToProdDetails() {
    let prodModal = this.modalCtrl.create(ProductDetailsPage, { prod_details: this.product });
    prodModal.present();
  }


}
