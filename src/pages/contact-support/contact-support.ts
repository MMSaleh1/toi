import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

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
  email;
  constructor(public navCtrl: NavController, private emailComposer: EmailComposer,
    public navParams: NavParams, public callNumber: CallNumber, public menuCntrl: MenuController) {
    if (this.menuCntrl.isOpen()) {
      this.menuCntrl.toggle();
    }

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ContactSupportPage');
  }

  mail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        //Now we know we can send
        this.email = {
          to: 'Customer.service@toi2go',
          isHtml: true
        };
      }
    });
    this.email = {
      to: 'Customer.service@toi2go',
      isHtml: true
    };


    // Send a text message using default options
    this.emailComposer.open(this.email);
  }


  call() {
    this.callNumber.callNumber("01066877110", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  // mail() {
  //   window.open("mailto:" + "mohammed.magdy.ali.96@gmail.com", "_system");
  // }

}
