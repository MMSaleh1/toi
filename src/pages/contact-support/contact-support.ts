import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ContactSupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-support',
  templateUrl: 'contact-support.html',
})
export class ContactSupportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public callNumber : CallNumber , public menuCntrl : MenuController) {
    if(this.menuCntrl.isOpen()){
      this.menuCntrl.toggle();
    }
   
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ContactSupportPage');
  }

  call(){
    this.callNumber.callNumber("01066877110", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  mail(){
    window.open("mailto:" + "mohammed.magdy.ali.96@gmail.com", "_system");
  }

}
