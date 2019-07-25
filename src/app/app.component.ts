import { TabsPage } from './../pages/tabs/tabs';
import { ContactUsPage } from './../pages/contact-us/contact-us';
import { Component } from '@angular/core';
import { Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
 
import { UserProvider, User } from './../providers/user/user';

// import { BackgroundMode } from '@ionic-native/background-mode';
// import { LocalNotifications } from '@ionic-native/local-notifications';
import { LandingPage } from '../pages/landing/landing';


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
  // async backgroundcheck(){
  //   if(this.backgroundMode.isActive() == true){
  //     //    this.localNotifications.schedule({
  //     //   id: 1,
  //     //   text: `Test`,
  //     //   sound:  'file://beep.caf',
  //     // });

  //       setTimeout( () => {
  //         this.checkOrderStatus();
          
  //   }, 18000);
  //    }
  //    this.backgroundcheck();
  // }
  // async test(){
  //   for(;;){
  //     setTimeout( () => {
  //       this.checkOrderStatus();
  // }, 18000);
  //  }
  // }

  // async checkOrderStatus(){
  //   let orders = await this.userProv.getUserAppointments();
  //   for(let i =0;i<orders ;i ++){
  //     let order = await this.userProv.getSpesificOrder(orders[i].id);
  //     if(orders[i].orderStatusId != order.orderStatusId){
  //       this.localNotifications.schedule({
  //         id: 1,
  //         text: `Please Check Order number ${order.orderStatusId}`,
  //         sound:  'file://beep.caf',
  //       });
  //     }

  //   }

  // }

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
    }
    
  }
}

