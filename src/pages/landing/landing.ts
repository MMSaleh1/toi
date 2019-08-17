import { UserProvider, User } from './../../providers/user/user';
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
declare var Swiper: any;

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  
  selectedSegment : number;
  public user :User;
  public skipReady
  config = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProv :UserProvider , public events : Events) {
    this.test("145",192,"hello",false);
   this.skipReady= false;
    this.getUser().then();
   this.selectedSegment = 1;
   this.config = {
    speed: 1500,
    paginationClickable: true,
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    initialSlide: 0,
    slidesPerView: 1,
    effect: 'coverflow',
  };



  }
  async getUser(){
     this.user= await this.userProv.getUser();
    console.log(this.user);
    if(this.user != undefined && this.user.id != "-1"){
      
      this.userProv.getHistory(this.user.id).then(data=>{
        
        if(data !=undefined && data.length > 0 ){
          for(let i =0;i<data.length ; i++){
           
            if(data[i].orderStatusId != '6' && data[i].orderStatusId != '4'){
              
              this.userProv.SaveUpcommingAppointment(data[i]);
            }
          }
        }
      });
      this.events.publish('logedin')
      this.skipReady =true;
   //this.navCtrl.setRoot(TabsPage)
    }else{
      setTimeout(() => {
        
      }, 3000);
      this.skipReady =true;
     // this.navCtrl.setRoot(SigninPage);
    }
  }

  swipeChange($event){
    console.log($event);
    if($event.direction == 4){
      this.selectedSegment ==1 ? 1 :  this.selectedSegment = this.selectedSegment-1 ;
    }else if($event.direction == 2){
      this.selectedSegment ==3 ?  3 :this.selectedSegment = this.selectedSegment+1;
    }

    console.log(this.selectedSegment);



  }

  skip(){
    if(this.skipReady == true){
      if(this.user != undefined && this.user.id != "-1"){
        this.events.publish('logedin')
        this.navCtrl.setRoot(TabsPage)
      }else{
        this.navCtrl.setRoot(SigninPage);
      }
    }

  }

  ionViewDidLoad() {
   
  }
  test(...a){
    console.log(a);
  }
  
  slideToNext(){
    
    // var mySwiper = document.querySelector('.swiper-container').swipe÷r
    // mySwiper.slideNext();
  }
}
