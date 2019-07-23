import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProv :UserProvider , public events : Events) {
   this.getUser().then();
  }
  async getUser(){
    let user= await this.userProv.getUser();
    console.log(user);
    
    if(user != undefined && user.id != "-1"){
      this.userProv.getHistory(user.id).then(data=>{
        
        if(data !=undefined && data.length > 0 ){
          for(let i =0;i<data.length ; i++){
           
            if(data[i].orderStatusId != '6' && data[i].orderStatusId != '4'){
              
              this.userProv.SaveUpcommingAppointment(data[i]);
            }
          }
        }
      });
      this.events.publish('logedin')
     //this.navCtrl.setRoot(TabsPage)
    }else{
     // this.navCtrl.setRoot(SigninPage);
    }
  }

  ionViewDidLoad() {
   
  }

}
