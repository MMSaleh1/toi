import { CartPage } from './../cart/cart';
import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';
import { User, UserProvider } from '../../providers/user/user';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: string ="HomePage";
  tab2Root: string ="CartPage";
  tab3Root: string ="ProfilePage";
  tab4Root: string ="NotificationsPage";
  selectedIndex :number;
  cart : CartProvider
  user : User;
  public ready = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuctrl :MenuController,public userProv : UserProvider , public events : Events) {
    this.selectedIndex = navParams.get('tab') || 0;
    this.cart = CartProvider.getInstance();
  this.userProv.getUser().then(data=>{
      this.user = data;
      console.log(this.user);
      this.ready = true;
    });
    this.events.subscribe('tab-change',(unread)=>{
        this.user.unRead = unread
    })
      if(this.menuctrl.isOpen()){
      this.menuctrl.toggle();
    }
    console.log(this.cart);
  }

  public navTo(tabIndex: any){
    this.selectedIndex=tabIndex;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
 
  }

}
