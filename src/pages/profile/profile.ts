import { UserProvider, User } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { SigninPage } from '../signin/signin';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public user : User;

  constructor(public navCtrl: NavController ,public userProv : UserProvider) {
    this.user = userProv.getUser();
  }
  
     signin(){
    this.navCtrl.setRoot(SigninPage);
    }

}
