import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, LoadingController, Events } from 'ionic-angular';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  ValidatorFn,
  AbstractControl
} from "@angular/forms";

import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

import { User, UserProvider } from '../../providers/user/user';
import { Storage } from '@ionic/storage';
import { NotificationsProvider } from '../../providers/notifications/notifications';
import { HelperToolsProvider } from '../../providers/helper-tools/helper-tools';
import { RootProvider } from '../../providers/root/root';
import { ImageProcess } from '../../providers/items-api/items-api';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public regesterForm: FormGroup;
  public user: User;
  public hasImage: boolean;
  public base64: string = "";
  public displayImage : string ="";

  constructor(public navCtrl: NavController
    , public formBuilder: FormBuilder
    , public loadCtrl: LoadingController
    , public userProvider: UserProvider
    , public events: Events
    , private helperTools: HelperToolsProvider
    , public storage: Storage
    , public notifiCtrl: NotificationsProvider
  ) {
    this.buildForm();
    this.hasImage =false;
    console.log(new Date().getTime() + "1234425");

  }

  buildForm() {
    this.regesterForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      passwordConfirm: new FormControl("", [Validators.required, this.equalto("password")]),
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],

    })
  }
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;

      let isValid = control.root.value[field_name] == input;
      if (!isValid) return { equalTo: { isValid } };
      else return null;
    };
  }
  home() {
    this.navCtrl.setRoot(TabsPage);
  }

  signin() {
    this.navCtrl.setRoot(SigninPage);
  }

  onSubmit() {
    console.log(this.pwValidity());


  }
  pwValidity(): Boolean {
    return this.regesterForm.value.password == this.regesterForm.value.passwordConfirm ? true : false;

  }

  public async onRegester() {
    if (this.regesterForm.value.passwordConfirm != this.regesterForm.value.password) {
      alert("Password does Not Match")
    } else {
      if (this.regesterForm.valid) {
        this.helperTools.ShowLoadingSpinnerOnly();
        let token = await this.notifiCtrl.getDeviceId();
        let add = await this.userProvider.RegesterNop(this.regesterForm.value.userName, this.regesterForm.value.password, this.regesterForm.value.email, this.regesterForm.value.phone, token);
        console.log(add);
        
        if (add == true) {
          this.user = User.getInstance(); 
          if(this.base64.length >  1){
          //  console.log(this.helperTools.uploadPic(this.base64,RootProvider.UserImageUrl,name));
            this.user.image = ImageProcess.getUserImageUrl(await this.userProvider.sendImage(this.base64));
            // this.user.image = RootProvider.UserImageUrl+name;
            this.userProvider.updateProfile(this.user.id,this.user.name,this.user.phone,this.user.email,this.user.password,this.user.image);
          }
          this.storage.set('user', this.user);
          this.events.publish('logedin')

          console.log(this.userProvider.user);
          this.navCtrl.setRoot(TabsPage);
          this.helperTools.DismissLoading();
        } else {
          this.helperTools.DismissLoading();
          setTimeout(() => {
            this.helperTools.ShowAlertWithTranslation('Error', "This user name is already in use, Please try a new one or Login.")
          }, 300);
        
        }



      } else {
        this.helperTools.ShowAlertWithTranslation('Error', "Invalid fields.");
      }

    }


  }

  public getPhoto(){
    this.helperTools.OpenImage().then((data : any)=>{
      console.log(data);
      if(data != 'cancel'){
        this.base64 =  data;
        this.displayImage = 'data:image/jpeg;base64,' +data;
      }
      
       //'data:image/jpeg;base64,' 
      // this.hasImage = true;
     
    });
  }



}
