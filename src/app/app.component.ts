import { TabsPage } from './../pages/tabs/tabs';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { Component } from '@angular/core';
import { Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ToastController } from 'ionic-angular';



import { SigninPage } from '../pages/signin/signin';


import { UserProvider, User } from './../providers/user/user';

import { LandingPage } from '../pages/landing/landing';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { NotificationsProvider } from '../providers/notifications/notifications';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public user: User;
  rootPage: any = LandingPage;
  isLogedin: boolean = false;
  constructor(
    public platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , public userProv: UserProvider
    , public event: Events
    , private notifyCtrl: NotificationsProvider
    , public menuCntrl: MenuController
    , public toastCtrl: ToastController,
  ) {

    platform.ready().then(() => {
      this.isLogedin=false;
      this.menuCntrl.enable(false);
      this.event.subscribe('logedin', () => {
        this.getUser();
       
        
        // alert("ready");

      });
     
      if(this.platform.is('cordova')){
        this.notifyCtrl.init();
       
      }


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  async getUser(){
    this.user = await this.userProv.getUser();
    this.isLogedin = true;
    this.menuCntrl.enable(true);
  }
  toPage(number: string) {
    if (number == '1') {
      this.rootPage = ContactUsPage;
    } else if (number == '2') {
      this.rootPage = TabsPage;
    } else if (number == '3') {
      this.rootPage = AboutPage;
    } else if (number == '4') {
      this.rootPage = TermsPage;
    }

  }

  logOut() {
    this.userProv.logOut();
    this.user = null;
    this.menuCntrl.enable(false);
    this.rootPage = SigninPage;

  }
}
