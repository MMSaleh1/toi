import { Component } from '@angular/core';
import { IonicPage,LoadingController, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User, UserProvider } from '../../providers/user/user';
import { HelperToolsProvider } from '../../providers/helper-tools/helper-tools';
import { RootProvider } from '../../providers/root/root';
import { ImageProcess } from '../../providers/items-api/items-api';
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
  public base64 : string = "";
  public hasImage :boolean ;
  public displayImage :string = "";
  
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder,
    private helperTools: HelperToolsProvider,
    public userProv :UserProvider,
    public loaderCtrl : LoadingController,
    public events : Events
    ) {
    this.buildForm();
    this.hasImage = false;
  }

  async buildForm(){
    this.user = await this.userProv.getUser();
    console.log(this.user);
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
    console.log(this.updateForm.value.userName);
    if(this.updateForm.valid){
      this.helperTools.ShowLoadingSpinnerOnly();
      if(this.base64.length >  1){

        // let name = this.user.id+ new Date().getTime();
        // console.log(name);
        // console.log(this.helperTools.uploadPic(this.base64,RootProvider.UserImageUrl,name));
      
       this.user.image = ImageProcess.getUserImageUrl(await this.userProv.sendImage(this.base64));
      //  alert(this.user.image);
        //  this.user.image = RootProvider.UserImageUrl+name;
      }
      
      
      this.userProv.updateProfile(this.user.id,this.updateForm.value.userName,this.updateForm.value.phone,this.updateForm.value.email,this.updateForm.value.password,this.user.image).then(data=>{
         this.helperTools.DismissLoading();
       
        this.helperTools.ShowAlertWithTranslation('Done', "Profile has been updated successfully, Thank you.")
       
        this.navCtrl.pop();
      })
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
