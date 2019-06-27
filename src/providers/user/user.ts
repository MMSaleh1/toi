import { CartProvider } from './../cart/cart';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RootProvider} from '../root/root';
import { Events } from 'ionic-angular';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider extends RootProvider {

  private userApiController:string = 'users/';
  
  private logInActionString = "loginn?";
  private regesterActionString = "user_reg?";
 

  private addressApiController = "address/";
  private addAddressActionString = "add_user_address?"

  private getAreaActionString = "get_all_area?";
  private getAllGovernment = "get_all_government?";

  private addressUserLinkActionString = "link_user_address?";

  private getUserAddressActionString = "get_user_address?";

  private rateApiController = 'product/';
  private rateActionString = "add_review?";

  private orderApiController = "orders/";
  private orderItemActionString ="add_order_item?";
  private orderRequestActionString = "requst_order?";

  public user: User; 



  constructor(public http: HttpClient, public storage : Storage , public event : Events) {
    super(http);
  }

  public async RegesterNop(Username:string,password:string,email:string,PhoneNumber:string): Promise<any>{
    return new Promise((resolve)=>{
      let date = new Date();
      console.log(date);
      let temp = `${RootProvider.APIURL}${this.userApiController}${this.regesterActionString}token_id=0&mail=${email}&name=${email}&phone=${PhoneNumber}&address=""&password=${password}`;
      console.log(temp);
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data);
        if(data != null && data != undefined && data.length>0){
          this.user = User.getInstance(data[0].ID,Username,password,email);
          this.event.publish('logedin');
          resolve(data[0].ID);

        }else{
          resolve("-1")
        }
      })
    })
  }

  public async loginNop(email:string,password:string): Promise<any>{
    return new Promise((resolve)=>{
      let temp = `${RootProvider.APIURL}${this.userApiController}${this.logInActionString}mail=${email}&phone=""&password=${password}`;
      console.log(temp);
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data[0]);
        if(data != null && data != undefined && data.length>0){
          console.log(data[0].id+ "  : "+data[0].name+"  :  "+data[0].password+"  :  "+data[0].mail)
          this.user = User.getInstance(data[0].id,data[0].name,data[0].password,data[0].mail);
          this.event.publish('logedin');
          console.log(this.user);
          resolve(true);
        }else{
          resolve(false)
        }
      })
    })
  }

  public async getArea() :Promise<any>{
    let temp = `${RootProvider.APIURL}${this.addressApiController}${this.getAreaActionString}`; 
    let states = new Array<area>();
    
    return new Promise ((resolve)=>{
      this.http.get(temp).subscribe((data:any) => {
        console.log(data);
        if(data != undefined && data.length > 0)
        {
          for(let i =0;i<data.length;i++){
            states.push(new area(data[i].id,data[i].government_id,data[i].area_name));
          }
          
          resolve(states)
        }else{ 
          
          resolve([]);
        }
      },err =>{
       console.log(err);
        resolve([]);
      }
    )
    })
  }
  public async getGovernment() :Promise<any>{
    let temp = `${RootProvider.APIURL}${this.addressApiController}${this.getAllGovernment}`; 
    let states = new Array<government>();
    
    return new Promise ((resolve)=>{
      this.http.get(temp).subscribe((data:any) => {
        console.log(data);
        if(data != undefined && data.length > 0)
        {
          for(let i =0;i<data.length;i++){
            states.push(new government(data[i].id,data[i].government_name));
          }
          
          resolve(states)
        }else{ 
          
          resolve([]);
        }
      },err =>{
       console.log(err);
        resolve([]);
      }
    )
    })
  }

  public getAreaById(states:Array<area>,id:string): area{
    let chosen ;
    states.forEach(element => {
      if(element.id == id){
        chosen = element;
      }
      
    });
    return chosen
  }

  public getAreaByName(states:Array<area>,name:string):area{
    let chosen ;
    states.forEach(element=>{
     
      if(element.name.toLowerCase() === name.toLowerCase())
      { console.log(element.name.toLowerCase() === name.toLowerCase());
        chosen = element;
      }
    });
    return chosen;
  }

  

  public getUser(){
    return User.getInstance();
  }

  public async addAddress(address : string,stateId :string,userId:string):Promise<any>{

    let temp = `${RootProvider.APIURL}${this.addressApiController}${this.addAddressActionString}address=${address}&longg=0&latt=0&user_id=${userId}&area_id=${stateId}`;
    console.log(temp);
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data.length);
        if(data!=undefined && data.length>0){
          
          resolve(data[0].id);
        }
        resolve(null)
      })
      resolve(null);
    })
      
    
  }

  // public async getAddress(userId:string):Promise<any> {
  //   let temp=`${RootProvider.APIURL}${this.addressApiController}${this.getUserAddressActionString}user_id=${userId}`
  //   console.log(temp);
  //   return new Promise((resolve)=>{
      
  //     this.http.get(temp).subscribe((data:any)=>{
  //       console.log(data);
  //       let userAddress = new Array<Address>();
  //       if(data != undefined && data.length > 0){
          
  //         for(let i = 0 ;i < data.length ; i++){
  //           userAddress.push(new Address());
  //           userAddress[i].fromString(data[i].Address1);
  //           userAddress[i].id=data[i].Address_Id;
  //           userAddress[i].zipCode=data[i].ZipPostalCode;
  //         }
  //         this.user = this.getUser();
  //         console.log(this.user);
  //         this.user.addresses = userAddress;
  //         resolve(userAddress);
          
  //       }else{
  //         resolve(userAddress);
  //       }

  //     }),err=>{
  //       resolve(err);
  //     }
      
  //   })
  // }


  public async rate(productId,rate,title,body){
    let temp=`${RootProvider.APIURL}${this.rateApiController}${this.rateActionString}CustomerId=${this.user.id}&ProductId=${productId}&Rating=${rate}&Title=${title}&ReviewText=${body}`;
    console.log(temp); 
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        resolve(data);

      },err=>{
        resolve(err);
      })
    })
  }

  // public removeAddress(address : Address){
  //   this.user.removeSavedAddress(address);
  //   this.storage.set('user',this.user);
  // }

  public async Order(user_id,address_id,stuff_id,emp_gender="Not",order_total,cart:CartProvider){
    let temp = `${RootProvider.APIURL}${this.orderApiController}${this.orderItemActionString}user_id=${user_id}&address_id=${address_id}&stuff_id=${stuff_id}&emp_gender=${emp_gender}&order_total=${order_total}`
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data);
        for(let i =0 ;i<cart.cartItems.length;i++){
          console.log(this.orderItem(data[0],cart.cartItems[i].item.id,cart.cartItems[i].quant));
        }
      })
    })
  }

  private async orderItem(order_id,product_id,quntity){
    let temp = `${RootProvider.APIURL}${this.orderApiController}${this.orderItemActionString}order_id=${order_id}&product_id=${product_id}&quntity=${quntity}`;
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        resolve(data);
      },err=>{
        console.log(err);
        resolve([]);
      }) 
    })
  
  }



}

export class User {
  id: string;
  name: string;
  fName:string;
  lName:string;
  gender: string;
  addresses: Address[];
  password: string;
  email: string;
  phone: string;
  image : string; 

  
  private static instance: User = null;
  static isCreating: boolean = false;

  constructor(id: string = "-1", name: string = "", gender: string = "Male", password: string = "", email: string = "", phone: string = "",lName :string ="",fName: string = "",address: Address[] = new Array()) {
   
    if (User.isCreating) {
      throw new Error("An Instance Of User Singleton Already Exists");
    } else {
      this.setData(id, name, password, email,gender, phone,address);
      User.isCreating = true;
    }
  }

  public setData(id: string = "-1", name: string = "", password: string = "", email: string = "", gender: string = "Male", phone: string = "", address: Address[] = new Array()) {
    
    this.id = id;
    this.name = name;
    this.gender = gender
    this.addresses = new Array();
    this.addresses = address;
    this.password = password;
    this.email = email;
    this.phone = phone;
  }

  static getInstance(id: string = "-1", name: string = "",  password: string = "", email: string = "",gender: string = "ذكر", phone: string = "",fName:string="",lName:string="",address: Address[] = new Array()) {
    if (User.isCreating === false && id !="-1") {
      //User.isCreating = false;
      User.instance = new User(id, name, gender, password, email, phone,lName,fName, address);
      console.log(console.log(User.instance));
    }
    if (id != "-1") {
      User.instance.setData(id, name,password, email,gender, phone,address);
    }
    return User.instance;
  }

  public addSavedAddress(address: Address) {

    this.addresses.push(address);


  }

  public removeSavedAddress(u: Address): void {
    let pos = -1;
    for (let i = 0; i < this.addresses.length; i++) {
      if (this.addresses[i] === u) {
        pos = i;
      }
    }
    if (pos >= 0) {
      this.addresses.splice(pos, 1);
    }
  }




}

export class Address {
  id:string;
  houseNum: string;
  street: string;
  Block: string;
  district: string;
  city: string;
  country: string;
  zipCode: string;

  constructor(houseNum = "", street = "", block = "", district = "", city = "", country = "", zipCode = "") {
    this.houseNum = houseNum;
    this.street = street;
    this.Block = block;
    this.district = district;
    this.city = city;
    this.country = country;
    this.zipCode = zipCode
  }

  toString(): string{
    return this.houseNum + "," + this.street + "," + this.Block + "," + this.district + "," + this.city + "," + this.country;
  }
  fromString(address : string){
     let temp = new Array();
     let start = 0 ;
     let end = 0;
     for(let i = 0; i<=address.length;i++){
       if(address[i] == ','){
         temp.push(address.slice(start,i))
         start=i+1;
       }
       if(i == address.length){
        temp.push(address.slice(start,i));
       }
       
     }
     this.houseNum = temp[0];
     this.street = temp[1];
     this.Block = temp[2];
     this.district = temp[3];
     this.city = temp[4];
     this.country = temp[5];
  }
}

export class area{
  public id : string;
  public governmentId: string
  public name : string;
  constructor(id:string,governmentId,name:string){
    this.id=id;
    this.governmentId=governmentId;
    this.name=name;

  }
}

export class government {
  public id : string;
  public name : string
  areas : Array<area>;
  constructor(id : string,name : string){
    this.id = id;
    this.name = name;
    this.areas = new Array();
  }
}


