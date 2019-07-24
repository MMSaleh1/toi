import { Component } from '@angular/core';
import { IonicPage,LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User, UserProvider } from '../../providers/user/user';
/**
 * Generated class for the UpdateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {
  public updateForm : FormGroup;
  public user : User
  public ready = false;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder : FormBuilder,public userProv :UserProvider,public loaderCtrl : LoadingController) {
    this.buildForm();
  }

  async buildForm(){
    this.user = await this.userProv.getUser();
    this.updateForm = this.formBuilder.group({
      userName: ['',[Validators.required, Validators.maxLength(20),Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phone: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
    })
    this.ready = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProfilePage');
  }

  public async update(){
    let loading = this.loaderCtrl.create({
      content: 'Updating ,Please Wait'
    });
    console.log(this.updateForm.value.userName);
    if(this.updateForm.valid){
      loading.present();
      this.userProv.updateProfile(this.user.id,this.updateForm.value.userName,this.updateForm.value.phone,this.updateForm.value.email,this.updateForm.value.password,"").then(data=>{
        loading.dismiss();
        this.navCtrl.pop();
      })
    }
   

  }

}
