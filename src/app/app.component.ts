import { HelperToolsProvider } from './../providers/helper-tools/helper-tools';
import { TabsPage } from './../pages/tabs/tabs';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { Component, ViewChild } from '@angular/core';
import { Platform, Events, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import { ToastController } from 'ionic-angular';



import { SigninPage } from '../pages/signin/signin';


import { UserProvider, User } from './../providers/user/user';

import { LandingPage } from '../pages/landing/landing';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { NotificationsProvider } from '../providers/notifications/notifications';
import { CallNumber } from '@ionic-native/call-number';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public user: User;
  @ViewChild(Nav) nav: Nav;
  user_data = {} as any;
  rootPage: any = LandingPage;
  isLogedin: boolean = false;
  constructor(
    private platform: Platform
    , private statusBar: StatusBar
    , private splashScreen: SplashScreen
    , public userProv: UserProvider
    , private storage: Storage
    , public event: Events
    , private callNumber: CallNumber
    , private helperTools: HelperToolsProvider
    , private notifyCtrl: NotificationsProvider
    , public menuCntrl: MenuController
    , public toastCtrl: ToastController
  ) {
    this.initializeApp()
    // this.rememberUser();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.isLogedin = false;
      // this.menuCntrl.enable(false);
      this.event.subscribe('logedin', () => {
        this.getUser();
       

        // alert("ready");
      });
      this.helperTools.IntializeUSerCurrentPosition();

      if (this.platform.is('cordova')) {
        this.notifyCtrl.init();
      }


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#231f20');
      this.splashScreen.hide();
    });
  }

  rememberUser() {
    this.storage.get('user').then(data => {
      if (data) {
        this.nav.setRoot(TabsPage)
        this.user_data = data;
        
      }
    })
  }

  async getUser() {
    this.user = await this.userProv.getUser();
    this.user.orderHistory = await this.userProv.getHistory(this.user.id);
    this.user_data = this.user;
    this.isLogedin = true;
    this.menuCntrl.enable(true);

   
   
    this.userProv.getUSerNotifications(this.user.id).then(data=>{
      this.user.notifications = data[0];
      this.user.unRead = data[1];
      console.log(this.user);
      this.userProv.saveUser(this.user);
      console.log(this.user);
      
    });
  }
  toPage(number: string) {
    if (number == '1') {
      this.nav.push(ContactUsPage)
      // this.rootPage = ContactUsPage;
    } else if (number == '2') {
      // this.rootPage = TabsPage;
      this.nav.setRoot(TabsPage)
    } else if (number == '3') {
      this.nav.push(AboutPage)
      // this.rootPage = AboutPage;
    } else if (number == '4') {
      this.callNumber.callNumber("01066877110", true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));

      // this.nav.push(TermsPage)
      // this.rootPage = TermsPage;
    }


  }

  logOut() {
    this.userProv.logOut();
    this.user = null;
    this.storage.remove('user')
    this.menuCntrl.enable(false);
    this.rootPage = SigninPage;
  }
}
