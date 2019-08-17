import { ThanksPage } from './../thanks/thanks';
import { UserProvider, area, government, User } from './../../providers/user/user';
import { CartProvider } from './../../providers/cart/cart';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HelperToolsProvider } from '../../providers/helper-tools/helper-tools';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  public cart: CartProvider
  public tab: string;
  public governments: Array<government>;
  public ready = false;
  public selectedGovernment: government;
  public selectedArea: area;
  public address: string;
  public addressid: string;
  public paymentMethodClass: string = "payment-method";
  public orderReady: boolean = false;
  public user: User;
  user_pos = {} as any;
  constructor(public navCtrl: NavController,
    private helperTools: HelperToolsProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public userProv: UserProvider) {
    this.cart = CartProvider.getInstance();
    this.governments = new Array();
    this.address = "";

    this.getdata();

    console.log(this.cart);
  }
  async getdata() {
    this.governments = await this.userProv.getGovernment();
    this.user = await this.userProv.getUser();
    let areas = await this.userProv.getArea();
    for (let i = 0; i < this.governments.length; i++) {
      for (let j = 0; j < areas.length; j++) {
        if (this.governments[i].id == areas[j].governmentId) {
          this.governments[i].areas.push(areas[j]);
        }
      }
    }
    this.selectedGovernment = this.governments[0];
    this.selectedArea = this.selectedGovernment.areas[0];
    console.log(this.governments);
    this.tab = "new";
    this.ready = true;
  }


  check() {
    console.log(this.selectedGovernment);
    console.log(this.selectedArea);
    console.log(this.address);
  }
  async addAddress() {
    if (this.address == "") {
      this.helperTools.ShowAlertWithTranslation('Alert', "Please enter your address.")
    } else if (this.selectedArea == undefined) {
      this.helperTools.ShowAlertWithTranslation('Alert', "Please select area.")
    } else if (this.selectedGovernment == undefined) {
      this.helperTools.ShowAlertWithTranslation('Alert', "Please select government and area.")

    } else {
      this.addressid = await (this.userProv.addAddress(this.address, this.selectedArea.id, this.user.id,this.user_pos.lng,this.user_pos.lat));
      console.log(this.addressid);
      this.tab = "payment";
    }

  }
  async order() {
    console.log(await this.userProv.Order(this.user.id, this.addressid, 0, this.cart.totalPrice, this.cart));
    this.cart.clear();
    this.navCtrl.push(ThanksPage);
  }

  choosePaymentMithod(type) {
    if (type == 'cash') {
      this.paymentMethodClass = "payment-method-active";
      this.orderReady = true;
    }
    else {
      this.helperTools.ShowAlertWithTranslation("Alert", "Soon online payment will be available.")
    }
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad CheckoutPage');
  }

  getLocation() {
    if (!this.address) {
      let mapModal = this.modalCtrl.create("MapModalPage");
      mapModal.present();
      mapModal.onDidDismiss(data => {
        if (data != null) {
          this.user_pos = data;
          console.log(this.user_pos.lat);
          console.log(this.user_pos.lng);
          console.log(data);
          this.latLngConverter(this.user_pos.lat, this.user_pos.lng)
        } else {
          // this.viewCtrl.dismiss();
        }
      });
    }
    else{

    }
  }

  ///////////////////////////////////////////////CONVERT LAT LNG TO TEXT//////////////////////////////////////
  latLngConverter(lat, long) {
    let geocoder = new google.maps.Geocoder;
    let latlng = { lat: lat, lng: long };
    geocoder.geocode({ 'location': latlng }, (results, status) => {
      this.address = results[0].formatted_address;
      console.log(this.address);
    });
  }


}
