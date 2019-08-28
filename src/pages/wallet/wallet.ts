import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  balance : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.balance = 0;
    // this.generateCode(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }


  public generateCode(length : number){
    
    while(true){
      setTimeout(() => {
        console.log(Math.random()*(100-65)+65)
      }, 100);
      
    }
    
  }

}
