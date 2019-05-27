import { Component } from '@angular/core';
import { NavController ,LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

import {User , UserProvider} from '../../providers/user/user';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public regesterForm: FormGroup;

  constructor(public navCtrl: NavController,public formBuilder : FormBuilder , public loadCtrl : LoadingController , public userProvider : UserProvider) {
    this.buildForm();

  }

  buildForm() {
    this.regesterForm = this.formBuilder.group({
      userName: ['',[Validators.required, Validators.maxLength(20),Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
   
    })
  }
   home(){
    this.navCtrl.setRoot(HomePage);
    }
    
    signin(){
    this.navCtrl.setRoot(SigninPage);
    }

    onSubmit(){
      console.log(this.pwValidity());

      
    }
    pwValidity() : Boolean{
      return this.regesterForm.value.password == this.regesterForm.value.passwordConfirm ? true : false;

    }

    public async onRegester()  {
      let loading = this.loadCtrl.create({
        content: 'Logging in ,Please Wait'
      });
      if(this.regesterForm.value.passwordConfirm != this.regesterForm.value.password){
        alert("Password does Not Match")
      }else{
        if (this.regesterForm.valid) {
         loading.present();
          
           let add = await this.userProvider.RegesterNop(this.regesterForm.value.userName,this.regesterForm.value.password,this.regesterForm.value.email,this.regesterForm.value.phone);
           console.log(add);
           loading.dismiss();
            if(add!= "-1"){
            
            console.log(this.userProvider.user);
           this.navCtrl.setRoot(HomePage);
            
        }else{
            alert("this user name is used Please try a new one");
           }
           
         
          
      }else{
        alert("Invaled fields");
      }
  
      }
  
    
  }

}
