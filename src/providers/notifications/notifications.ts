
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Firebase } from '@ionic-native/firebase';
// import { Platform } from 'ionic-angular';
// import { AngularFirestore} from 'angularfire2/firestore';
import { UserProvider, User } from './../user/user';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {
  public user: User;

  constructor(public http: HttpClient,
    private oneSignal: OneSignal,
    public userProv: UserProvider) {
    console.log('Hello NotificationsProvider Provider');
    //  this.user = userProv.getUser();
  }
  public async init() {
    this.user = await this.userProv.getUser();
    this.oneSignal.startInit('47d5cac0-673c-430a-82ce-0cd2fea2e5fd', '690713618535');
    this.oneSignal.getIds().then(data=>{
      console.log(data);
    });
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

  }







}


