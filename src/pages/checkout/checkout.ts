import { ThanksPage } from './../thanks/thanks';
import { UserProvider, area, government } from './../../providers/user/user';
import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  public cart : CartProvider
  public tab : string;
  public governments : Array<government>;
  public ready = false;
  public selectedGovernment: government;
  public selectedArea : area;
  public address: string;
  public addressid: string;
  public paymentMethodClass : string ="payment-method";
  public orderReady:boolean =false;
  constructor(public navCtrl: NavController, public navParams: NavParams , public userProv: UserProvider) {
    this.cart =CartProvider.getInstance();
    this.governments = new Array();
    this.address="";
    
    this.getdata();
  
    console.log(this.cart);
  }
  async getdata(){
    this.governments = await this.userProv.getGovernment();
    let areas = await this.userProv.getArea();
    for(let i = 0 ;i<this.governments.length;i++){
      for(let j = 0 ; j<areas.length;j++){
        if(this.governments[i].id == areas[j].governmentId){
          this.governments[i].areas.push(areas[j]);
        }
      }
    }
    this.selectedGovernment = this.governments[0];
    this.selectedArea = this.selectedGovernment.areas[0];
    console.log(this.governments);
    this.tab = "new";
    this.ready = true;
  }


  check(){
    console.log(this.selectedGovernment);
    console.log(this.selectedArea);
    console.log(this.address);
  }
  async addAddress(){
    if(this.address == ""){
      alert("Enter Your Address")
    }else if(this.selectedArea == undefined){
      alert("Select Area");
    }else if(this.selectedGovernment == undefined){
      alert("select Government And Area");
    }else{
      this.addressid=await(this.userProv.addAddress(this.address,this.selectedArea.id,this.userProv.getUser().id));
      console.log(this.addressid);
      this.tab = "payment";
    }
   
  }
  async order(){
    console.log(await this.userProv.Order(this.userProv.getUser().id,this.addressid,0,this.cart.totalPrice,this.cart));
    
    this.navCtrl.push(ThanksPage);
  }

  choosePaymentMithod(){
    this.paymentMethodClass="payment-method-active";
    this.orderReady=true;
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad CheckoutPage');
  }

}
 