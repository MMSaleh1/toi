import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  public contact : FormGroup;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams , public formBuilder : FormBuilder , public userProv :UserProvider , public menuctrl: MenuController) {
    if(this.menuctrl.isOpen()){
      this.menuctrl.toggle();
    }
    userProv.getUser().then(data=>{
      this.user = data;
      this.buildForm();
    });
   
  }

  buildForm() {
    this.contact = this.formBuilder.group({
      name: [{value: this.user.name, disabled: true}, [Validators.required]],
      email: [{value: this.user.email, disabled: true}, [Validators.required]],
      mobile: [{value: this.user.phone, disabled: true}, [Validators.required]],
      contact: ['', [Validators.required]],

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  async sendData(){
    let temp = await this.userProv.sendMassage(this.user.id,this.contact.value.contact,this.user.name,this.user.email,this.user.phone);
    if(temp){
      this.navCtrl.setRoot(TabsPage);
    }else{
      alert("network Error");
    }
  }
}

