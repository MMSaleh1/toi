import { Category } from './../../providers/items-api/items-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppointmentPage } from '../appointment/appointment';
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  public category : Category;
  public ready;

  constructor(public navCtrl: NavController , public navparms : NavParams) {
    this.category = this.navparms.get('cate');
    //this.tempSetCates();
    this.ready = this.category == undefined ? false : true;

  }
  tempSetCates(){
    if(this.category!= undefined){
    for(let i = 0 ; i < this.category.children.length;i++){
      this.category.children[i].images[0] = "assets/imgs/subimage.png";
    }
  }
  }
  
   appointment(cate: Category){
    this.navCtrl.push(AppointmentPage,{"cate" : cate});
    }

}
