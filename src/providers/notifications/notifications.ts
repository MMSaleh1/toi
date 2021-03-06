
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Firebase } from '@ionic-native/firebase';
// import { Platform } from 'ionic-angular';
// import { AngularFirestore} from 'angularfire2/firestore';
import { UserProvider, User, Notification } from './../user/user';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {
  public user: User;

  constructor(public http: HttpClient
    ,private oneSignal: OneSignal
    ,public userProv: UserProvider
    ,public platform : Platform
    ) {
    console.log('Hello NotificationsProvider Provider');
      
  }
  public async init() {
    this.user = await this.userProv.getUser();
    this.oneSignal.startInit('47d5cac0-673c-430a-82ce-0cd2fea2e5fd', '690713618535');
    this.oneSignal.getIds().then(data=>{
      console.log(data.userId);
    });
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);


    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      console.log("nofication Opend");
     // let notification = data.notification.payload.additionalData;
    //  this.user.notifications.push(new Notification(notification.header,notification.content,notification.order_id,new Date()));
    //  console.log(this.user);

      this.userProv.getUSerNotifications(this.user.id).then(data=>{
        this.user.notifications = data[0];
        this.user.unRead = data[1];
        console.log(this.user);
        this.userProv.saveUser(this.user);
        
      });
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

  }

  public async getDeviceId(){
    if(this.platform.is('cordova')){
      let data = await this.oneSignal.getIds();
    return data.userId;
    }else{
      return '0';
    }

    
  }







}


