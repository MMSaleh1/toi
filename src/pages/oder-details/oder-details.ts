import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider, order } from '../../providers/user/user';

/**
 * Generated class for the OderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oder-details',
  templateUrl: 'oder-details.html',
})
export class OderDetailsPage {

  order  : order;
  ready : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams , public userCtrl : UserProvider) {
    this.ready = false;
    this.order = this.navParams.get('order') != null? this.navParams.get('order') : "";
    this.userCtrl.getorderItems(this.order.id,this.order.orderDate).then(data=>{
      if(data.length > 0){
        this.order.orderItems = data;
      }
      
      console.log(this.order);
      this.ready = true;
    })


  }

  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad OderDetailsPage');
  }

  getColor(){
    if(this.order.orderStatusId == '4'){
      return '#ff0000';
    }else if(this.order.orderStatusId == '6'){
      return '#00ff00';
    }else{
      return '0000ff';
    }
  }

}
