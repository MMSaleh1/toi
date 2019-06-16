import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MyappointmentPage } from '../myappointment/myappointment';
import { AboutPage } from '../about/about';
import { TestimonialsPage } from '../testimonials/testimonials';
import { BlogPage } from '../blog/blog';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { ServicesPage } from '../services/services';

import { ItemsApiProvider, Category } from './../../providers/items-api/items-api';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ready : boolean= false;
  public cates : Array<Category>;

  constructor(public navCtrl: NavController,public itemProv : ItemsApiProvider) {
   this.cates = new Array();
  }
   async getItems(){
     
    this.cates = await this.itemProv.getCategoriesNop();
    this.ready = true;
    console.log(this.cates);
    return true;
  }

  ionViewDidLoad(){
   
   this.getItems();
   
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
    contact(){
    this.navCtrl.push(ContactPage);
    } 
    profile(){
    this.navCtrl.push(ProfilePage);
    }  
    services(){
    this.navCtrl.push(ServicesPage);
    }
  }
