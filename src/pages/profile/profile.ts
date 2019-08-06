import { UserProvider, User } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { HistoryPage } from '../history/history';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { HelperToolsProvider } from '../../providers/helper-tools/helper-tools';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public user: User;
  ready = false;

  constructor(public navCtrl: NavController,
    private helperTools: HelperToolsProvider,
    public userProv: UserProvider) {
    this.getUser().then(() => {
      this.ready = true;
    })
  }

  async getUser() {
    this.user = await this.userProv.getUser();
    this.userProv.updateProfile(this.user.id, this.user.name, this.user.phone, this.user.email, this.user.password, this.user.image);
  }

  toPage(number: string) {
    if (number == '1') {
      this.navCtrl.push(HistoryPage);
    } else if (number == '2') {
      this.navCtrl.push(UpdateProfilePage);
    }
    else {
      this.helperTools.ShowAlertWithTranslation('Alert', "Soon online payment will be available.")
    }

  }



}
