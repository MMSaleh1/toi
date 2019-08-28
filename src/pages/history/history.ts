import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserProvider, order, User, orderStatus, orderItem } from '../../providers/user/user';
import { HelperToolsProvider } from '../../providers/helper-tools/helper-tools';

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
  orders: Array<order>;
  user: User;
  tab: string;
  allStatus: Array<orderStatus>;
  doneOrders: Array<order>;
  onGoingOrders: Array<order>;
  constructor(public navCtrl: NavController,
    private helperTools: HelperToolsProvider, public navParams: NavParams, public userProv: UserProvider, public loadingCtrl: LoadingController) {
    this.helperTools.ShowLoadingSpinnerOnly();
    this.setDate().then(() => {
      this.helperTools.DismissLoading();
      this.tab = "1";
      console.log(this.orders);
      console.log(this.onGoingOrders);
      console.log(this.doneOrders);
    })

  }

  ionViewDidLoad() {
    // this.userProv.getHistory()
  }
  public async setDate() {


    this.user = await this.userProv.getUser();
    this.orders = await this.userProv.getHistory(this.user.id);
    this.allStatus = await this.userProv.getAllStatus();
    // for (let i = 0; i < this.orders.length; i++) {
    //   this.orders[i].orderItems = await this.userProv.getorderItems(this.orders[i].id,this.orders[i].orderDate);
    // }
    // this.userProv.getUserAppointments().then(Data => {
    //   console.log(Data);
    // })
    this.setOrders();

  }

  setOrders() {

    this.doneOrders = new Array<order>();
    this.onGoingOrders = new Array<order>();
    for (let i = 0; i < this.orders.length; i++) {
      for (let j = 0; j < this.allStatus.length; j++) {

        if (this.allStatus[j].id == this.orders[i].orderStatusId) {
          this.orders[i].statusName = this.allStatus[j].name;
          if (this.orders[i].orderStatusId == '6' || this.orders[i].orderStatusId == '4') {
            this.doneOrders.push(this.orders[i]);
          } else {
            console.log(this.orders[i]);
            this.userProv.SaveUpcommingAppointment(this.orders[i]);
            this.onGoingOrders.push(this.orders[i]);
          }
        }
      }
    }
  }

  getColor(id : string){
    if(id == '4'){
      return '#ff0000';
    }else if(id == '6'){
      return '#00ff00';
    }else{
      return '0000ff';
    }

  }
  openDetails(order : order){
    this.navCtrl.push('OderDetailsPage',{order : order})
  }

}
