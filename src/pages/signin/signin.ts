import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController ,LoadingController, IonicPage } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { PasswordPage } from '../password/password';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


import {User , UserProvider} from '../../providers/user/user';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  public loginForm : FormGroup;
  public user : User;
  constructor(public navCtrl: NavController, public formBuilder : FormBuilder , public loadCtrl : LoadingController , public userProvider : UserProvider , public storage : Storage) {
    this.buildForm();

  } 

  buildForm() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    })
  }
    password(){
    this.navCtrl.push(PasswordPage);
    }
    
    signup(){
    this.navCtrl.setRoot(SignupPage);
    }
    home(){
    this.navCtrl.setRoot(TabsPage);
    }
     async onSignin(){
      let loading = this.loadCtrl.create({
        content: 'Logging in ,Please Wait'
      }); 
      
      
      if (this.loginForm.valid) {
        loading.present();
        let bool=false;
          bool = await this.userProvider.loginNop(this.loginForm.value.email,this.loginForm.value.password);
        
        if(bool == true){
          loading.dismiss(); 
           this.user = User.getInstance();
           this.storage.set('user',this.user);
           this.navCtrl.setRoot(TabsPage);
           this.user.addresses = await this.userProvider.getAddress(this.user.id);
        }else{
          loading.dismiss();
           alert('Wrong user name or password')
         }
      }else{
        alert('Wrong user name or password')
       }

    }
}
