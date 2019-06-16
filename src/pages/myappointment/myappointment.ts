import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myappointment',
  templateUrl: 'myappointment.html'
})
export class MyappointmentPage {
 appointment: string = "upcoming";
  constructor(public navCtrl: NavController) {

  }

}
