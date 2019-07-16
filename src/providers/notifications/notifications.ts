
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Firebase } from '@ionic-native/firebase';
// import { Platform } from 'ionic-angular';
// import { AngularFirestore} from 'angularfire2/firestore';
import { UserProvider, User } from './../user/user';
/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationsProvider {
  public user :  User;

  constructor(public http: HttpClient , public userProv : UserProvider) {
    console.log('Hello NotificationsProvider Provider');
    this.user = userProv.getUser();
  }

  // async getToken(){
  //   let token;
  //   if(this.platForm.is('android')){
  //     token = await this.fireBase.getToken();
  //   }
  //   if(this.platForm.is('ios')){
  //     token = await this.fireBase.getToken();
  //     await this.fireBase.grantPermission();
  //   }

  //   return this.saveToFireSore(token);

  // }

  // private saveToFireSore(token){
  //   if(!token){
  //     return
  //   }
  //   const devRef = this.fs.collection('devices');
  //   const docData = {
  //     token : token , 
  //     userId : this.user.id
  //   }
  //   return devRef.doc(token).set(docData);


  // }

  // public listenToNotifications(){
  //   return this.fireBase.onNotificationOpen();
  // }

}
