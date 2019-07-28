import { TabsPage } from './../pages/tabs/tabs';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { Component } from '@angular/core';
import { Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
 
import { UserProvider, User } from './../providers/user/user';

import { LandingPage } from '../pages/landing/landing';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public user : User;
  rootPage:any = LandingPage;
  isLogedin : boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,public userProv: UserProvider , public event :Events , public menuCntrl : MenuController) {
    platform.ready().then(() => {
      this.menuCntrl.enable(false);
      this.event.subscribe('logedin',()=>{
        // this.backgroundMode.enable()
          this.isLogedin = true;
        this.menuCntrl.enable(true);
        });
     
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


 

  async checkUser(){

   
      
     
      
// if(this.backgroundMode.isEnabled() == true){
//   this.backgroundMode.on('activate').subscribe(()=>{
//     this.backgroundcheck().then();
//    })
// }
      
    //  this.localNotifications.schedule({
    //   id: 1,
    //   text: `Test`,
    //   sound:  'file://beep.caf',
    // });
   


     
      
   

  }

  toPage(number:string){
    if(number == '1'){
      this.rootPage = ContactUsPage;
    }else if(number == '2'){
      this.rootPage = TabsPage;
    }else if( number == '3'){
      this.rootPage = AboutPage;
    } else if(number == '4'){
      this.rootPage = TermsPage;
    }
    
  }

  logOut(){
    this.userProv.logOut();
    this.user=null;
    this.menuCntrl.enable(false);
    this.rootPage=SigninPage;
    
  }
}

