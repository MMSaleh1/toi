import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { MyappointmentPage } from '../myappointment/myappointment';
import { AboutPage } from '../about/about';
import { TestimonialsPage } from '../testimonials/testimonials';
import { BlogPage } from '../blog/blog';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { ServicesPage } from '../services/services';

import { ItemsApiProvider, Category } from './../../providers/items-api/items-api';
import { AutoCompleteProvider } from './../../providers/auto-complete/auto-complete';
import { Database } from '../../providers/database/database';


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

  constructor(public navCtrl: NavController,public itemProv : ItemsApiProvider,public autoCompleteprov : AutoCompleteProvider) {
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
