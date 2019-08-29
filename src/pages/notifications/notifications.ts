import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider, User } from '../../providers/user/user';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  public user : User;
  public ready : boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public  userProv : UserProvider) {
    this.init();
    // this.removeNotification()
    
  }

  async init(){
    this.user = await this.userProv.getUser();
    this.userProv.changeUnreadnotifications();
    for(let i = 0 ; i<this.user.notifications.length;i++){
      this.userProv.readUserNotifications(this.user.notifications[i].id);
    }
    
    this.ready = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
   
    
    
  }

  removeNotification(){
    this.user.unRead = this.user.unRead-1;
    this.userProv.saveUser(this.user);
    console.log(this.user);
  }

}
