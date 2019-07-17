import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider, order, User, orderStatus, orderItem } from '../../providers/user/user';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  orders : Array<order>;
  user : User;
  tab : string;
  allStatus : Array<orderStatus>;
  doneOrders : Array<orderItem>;
  onGoingOrders : Array<orderItem>;
    constructor(public navCtrl: NavController, public navParams: NavParams , public userProv : UserProvider, public loadingCtrl : LoadingController) {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.setDate().then(()=>{
      loading.dismiss();
      this.tab ="1";
      console.log(this.orders);
      console.log(this.onGoingOrders);
      console.log(this.doneOrders);
    })

  }

  ionViewDidLoad() {
   // this.userProv.getHistory()
  }
  public async setDate(){
   

    this.user = await this.userProv.getUser();
    this.orders = await this.userProv.getHistory(this.user.id);
    this.allStatus = await this.userProv.getAllStatus();
    for(let i =0 ;i<this.orders.length ; i++){
      this.orders[i].orderItems = await this.userProv.getorderItems(this.orders[i].id);
    }
 this.userProv.getUserAppointments().then(Data=>{
   console.log(Data);
 })
    this.setOrders();

  }

  setOrders(){
  
    this.doneOrders= new Array<orderItem>();
    this.onGoingOrders= new Array<orderItem>();
    for(let i = 0 ; i<this.orders.length;i++){
      for(let j = 0 ; j<this.allStatus.length;j++){

        if(this.allStatus[j].id == this.orders[i].orderStatusId){
          this.orders[i].statusName = this.allStatus[j].name;
          if(this.orders[i].orderStatusId == '6'){
            this.doneOrders.push(...this.orders[i].orderItems);
          }else{
            console.log(this.orders[i]);
            this.userProv.SaveUpcommingAppointment(this.orders[i]);
            this.onGoingOrders.push(...this.orders[i].orderItems);
          }
        }
      }
    }
  }

}
