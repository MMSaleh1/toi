import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { NavController, IonicPage, ToastController, Platform } from 'ionic-angular';

import { MyappointmentPage } from '../myappointment/myappointment';
import { AboutPage } from '../about/about';
import { TestimonialsPage } from '../testimonials/testimonials';
import { BlogPage } from '../blog/blog';
import { ProfilePage } from '../profile/profile';
import { ServicesPage } from '../services/services';

import { ItemsApiProvider, Category } from './../../providers/items-api/items-api';
import { AutoCompleteProvider } from './../../providers/auto-complete/auto-complete';
import { Database } from '../../providers/database/database';

import { NotificationsProvider } from './../../providers/notifications/notifications';

import { tap } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ready : boolean= false;
  public cates : Array<Category>;
  public categorySlider: Array<any>;
  public db :Database;
  constructor(public navCtrl: NavController,public itemProv : ItemsApiProvider,public autoCompleteprov : AutoCompleteProvider , public notifProv : NotificationsProvider ,public toastCtrl :ToastController , public platForm : Platform) {
   this.cates = new Array();
   this.getItems();
  
  }
   async getItems(){
     
    this.cates = await this.itemProv.getCategories();
    this.db = Database.getInstance();
    this.db.categories = this.cates;
    this.ready = true;
    console.log(this.cates);
    return true;
  }


  ionViewDidLoad(){
    console.log(this.platForm);
    if(this.platForm.is('android') || this.platForm.is('ios')){
      this.notifProv.getToken();
    
      this.notifProv.listenToNotifications().pipe(tap(msg=>{
        const toast = this.toastCtrl.create({
          message : msg.body , 
          duration : 3000
        });
        toast.present();
      })).subscribe()
    }
   
  }

  toServices(cate: Category){
    this.navCtrl.push(ServicesPage,{'cate' : cate});
  }


    myappointment(){
    this.navCtrl.push(MyappointmentPage);
    }
     about(){
    this.navCtrl.push(AboutPage);
    } 
    testimonials(){
    this.navCtrl.push(TestimonialsPage);
    } 
    
    blog(){
    this.navCtrl.push(BlogPage);
    }  
    profile(){
    this.navCtrl.push(ProfilePage);
    }  
    services(){
    this.navCtrl.push(ServicesPage);
    }
    cart(){
      this.navCtrl.push(CartPage);
    }
  }
