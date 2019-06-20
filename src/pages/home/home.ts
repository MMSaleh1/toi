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


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public ready : boolean= false;
  public cates : Array<Category>;
  public categorySlider: Array<any>;

  constructor(public navCtrl: NavController,public itemProv : ItemsApiProvider,public autoCompleteprov : AutoCompleteProvider) {
   this.cates = new Array();
   this.getItems();
  }
   async getItems(){
     
    this.cates = await this.itemProv.getCategoriesNop();
    this.ready = true;
    console.log(this.cates);
    this.setCategories();
    return true;
  }

  ionViewDidLoad(){
   
 
   
  }

  setCategories(){
    this.categorySlider = new Array();
    let counter = 0;
    for(let i = 0;i<this.cates.length;i=i+2){
      this.categorySlider[counter] = new Array();
      this.categorySlider[counter][0]=this.cates[i];
      this.categorySlider[counter][1]=this.cates[i+1];
      counter++;
    }
    console.log(this.categorySlider);
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
