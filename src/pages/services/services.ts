import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppointmentPage } from '../appointment/appointment';
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {

  constructor(public navCtrl: NavController) {

  }
  
   appointment(){
    this.navCtrl.push(AppointmentPage);
    }

}
