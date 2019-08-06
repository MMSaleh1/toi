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
  private getHistoryActionString = "get_user_order?";
  private updateUserActionString = "edit_profile/";
  private updateDeviceTokenActionString ="update_token_id?";

  private addressApiController = "address/";
  private addAddressActionString = "add_user_address?"

  private getAreaActionString = "get_all_area?";
  private getAllGovernment = "get_all_government?";


  private rateApiController = 'product/';
  private rateActionString = "add_review?";

  private orderApiController = "orders/";
  private orderItemActionString ="add_order_item?";
  private orderRequestActionString = "requst_order?";
  private orderCurrentActionString ="get_all_orders/"



  private massageApiController ="massage/";
  private sendMassageActionString = "send_message?";

  private statusApiContoller = "stuff/"
  private getOrderStatusActionString= "get_all_order_states?";
  private getOrderItemActionString = "get_order_items?";

  

  public user: User; 

  constructor(public http: HttpClient, public storage : Storage , public event : Events ) {
    super(http);
   
  }

  public async RegesterNop(Username:string,password:string,email:string,PhoneNumber:string,deviceId): Promise<any>{
    return new Promise((resolve)=>{
      let date = new Date();
      console.log(date);
     
      let temp = `${RootProvider.APIURL}${this.userApiController}${this.regesterActionString}token_id=${deviceId}&mail=${email}&name=${Username}&phone=${PhoneNumber}&address=""&password=${password}`;
      console.log(temp);
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data);
        if( data != undefined && data.length>0 && data[0].error_name !="already exist"){
          this.user = User.getInstance(data[0].ID,Username,password,email,"Male",PhoneNumber,[],deviceId);
          this.storage.set('toi-user',this.user);
          this.event.publish('logedin');
          resolve(true);

        }else{
          resolve(false)
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
        if(data != null && data != undefined && data.length>0 && data[0].error_name != "wrong_password" && data[0].error_name != "already exist"){
          console.log(data[0].id+ "  : "+data[0].name+"  :  "+data[0].password+"  :  "+data[0].mail)
          this.user = User.getInstance(data[0].id,data[0].name,data[0].password,data[0].mail,"Male",data[0].phone,[]);
          this.storage.set('toi-user',this.user);
          this.event.publish('logedin');
          console.log(this.user);
          resolve(true);
        }else{
          resolve(false)
        }
      })
    })
  }


  public async updateDeviceToken(user_id , device_id):Promise<any>{
    let temp =`${RootProvider.APIURL}${this.userApiController}${this.updateDeviceTokenActionString}user_id=${user_id}&token_id=${device_id}`;

    return new Promise((resolve)=>{
      this.http.get(temp).subscribe(data=>{
        if(data!= undefined){
          resolve(true);
        }else{
          resolve(false)
        }
      
      })
    })
   

  }

  public async logOut(){
    this.user= null;
    this.storage.remove('toi-user');
  }

  public async updateProfile(id,name,phone,mail,password,user_img) : Promise<any>{
    let temp = `${RootProvider.APIURL}${this.userApiController}${this.updateUserActionString}${id}?name=${name}&phone=${phone}&mail=${mail}&password=${password}&user_img=${user_img}`;
    console.log(temp);
    return new Promise((resolve)=>{
       this.http.get(temp).subscribe((data:any)=>{
        if(data != undefined && data.lenght > 0){
          console.log(data[0]);
          this.user.name=name;
          this.user.phone = phone;
          this.user.email = mail; 
          this.user.password = password;
          this.user.image = user_img;
          this.storage.set('toi-user',this.user);
          resolve(data[0].id)
        }else{
          resolve(null);
        }
      })
    })
  }


  public async getSpesificOrder(orderId): Promise<any>{
    let temp = `${RootProvider.APIURL}${this.orderApiController}${this.orderCurrentActionString}${orderId}`;
    console.log(temp);
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        if(data != undefined && data.length > 0){
          let item = new order(data[0].id,data[0].order_date,data[0].accept_date,data[0].total,data[0].status_id,"");
          resolve(item);
        }
        else{
          resolve();
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

  

  public async getUser() : Promise<any>{
    return new Promise((resolve)=>{
      this.storage.get('toi-user').then(data=>{
        console.log(data);
        if(data != undefined){
          this.user = data;  
           resolve(User.getInstance(this.user.id,this.user.name,this.user.password,this.user.email,this.user.gender,this.user.phone,this.user.addresses,this.user.deviceID));
  
        }else{
          resolve(User.getInstance());
        }
        
      },err=>{
        console.log(err);
        resolve(User.getInstance());
      })

    })
   
  }

  public async addAddress(address : string,stateId :string,userId:string):Promise<any>{

    let temp = `${RootProvider.APIURL}${this.addressApiController}${this.addAddressActionString}address=${address}&longg=0&latt=0&user_id=${userId}&area_id=${stateId}`;
    console.log(temp);
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data);
        if(data!=undefined && data.length>0){
          
          resolve(data[0].ID);
        }else{
          resolve([])
        }
      })
    })
      
    
  }


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

  public async Order(user_id,address_id,stuff_id,order_total,cart:CartProvider){
    let temp = `${RootProvider.APIURL}${this.orderApiController}${this.orderRequestActionString}user_id=${user_id}&address_id=${address_id}&stuff_id=${stuff_id}&emp_gender=${cart.gender}&order_total=${order_total}`
    console.log(temp);
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        console.log(data);
        for(let i =0 ;i<cart.cartItems.length;i++){
         this.orderItem(data[0].ID,cart.cartItems[i].item.id,cart.cartItems[i].quant);
        }
        resolve(true);
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


  public async sendMassage(user_id,message_content,sender_name,sender_mail,sender_phone):Promise<any>{
    let temp = `${RootProvider.APIURL}${this.massageApiController}${this.sendMassageActionString}user_id=${user_id}&message_content=${message_content}&sender_name=${sender_name}&sender_mail=${sender_mail}&sender_phone=${sender_phone}`
    console.log(temp)
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe(data=>{
        if(data != undefined){
          resolve(true);
        }else{
          resolve(false);
        }

      })
    })
  }


  public async getHistory(id) : Promise<any>{
    let temp =`${RootProvider.APIURL}${this.userApiController}${this.getHistoryActionString}user_id=${id}`;
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        if(data != undefined && data.length != 0){
          let orders = new Array<order>();
          for(let i = 0 ; i < data.length ; i++){
              orders.push(new order(data[i].order_id,data[i].order_date,data[i].accept_date,data[i].order_total,data[i].status_id,data[i].address));
          }
          resolve(orders);
        }else{
          resolve([]);
        }
      })
    })
  }

  public async getorderItems(orderId: string):Promise<any>{
    let temp = `${RootProvider.APIURL}${this.statusApiContoller}${this.getOrderItemActionString}order_id=${orderId}`;
    console.log(temp);
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        if(data == undefined || data.length == 0){
          resolve([])
        }else{
          console.log(data);
          let items = new Array<orderItem>();
          for(let i = 0 ; i < data.length;i++){
            items.push(new orderItem(data[i].product_name,data[i].cost));
          }
          resolve(items);

        }
      })
    })
  }

  public async getAllStatus() :Promise<any>{
    let temp =`${RootProvider.APIURL}${this.statusApiContoller}${this.getOrderStatusActionString}`;
    return new Promise((resolve)=>{
      this.http.get(temp).subscribe((data:any)=>{
        if(data == undefined || data.length == 0 ){
          resolve([])
        }else{
          let statuses = new Array<orderStatus>();
          for(let i =0 ;i <data.length ; i++){
            statuses.push(new orderStatus(data[i].id,data[i].states_name));
          }
          resolve(statuses);
        }
      })
    })

  }

  public async SaveUpcommingAppointment(ORder : order){
    
    this.storage.get('toi-user-current-order').then(data=>{
      
      let savedData = new Array();
      if(data!= undefined && data.lenght>0){
        savedData = data
        savedData.push(ORder);
      }else{
        savedData.push(ORder);

      }
      console.log(savedData);
      this.storage.set('toi-user-current-order',savedData);
    },err=>{
      let data = new Array();
      data.push(ORder);
      console.log(data);
      this.storage.set('toi-user-current-order',data);
    })

  }

  public async getUserAppointments() : Promise<any>{
    return new Promise((resolve)=>{
      this.storage.get('toi-user-current-order').then(data=>{
        if(data != undefined && data.length > 0){
          console.log(data);
          resolve(data)
        }else{
          resolve([]);
        }
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
  deviceID: string;
  
  private static instance: User = null;
  static isCreating: boolean = false;

  constructor(id: string = "-1", name: string = "", gender: string = "Male", password: string = "", email: string = "", phone: string = "",address: Address[] = new Array(),deviceId :string ='0') {
   
    if (User.isCreating) {
      throw new Error("An Instance Of User Singleton Already Exists");
    } else {
      this.setData(id, name, password, email,gender, phone,address , deviceId);
      User.isCreating = true;
    }
  }

  public setData(id: string = "-1", name: string = "", password: string = "", email: string = "", gender: string = "", phone: string = "", address: Address[] = new Array(),deviceId : string ="0") {
    
    this.id = id;
    this.name = name;
    this.gender = gender
    this.addresses = new Array();
    this.addresses = address;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.deviceID = deviceId;
  }

  static getInstance(id: string = "-1", name: string = "",  password: string = "", email: string = "",gender: string = "", phone: string = "",address: Address[] = new Array(),deviceId :string="0") {
    if (User.isCreating === false && id !="-1") {
      //User.isCreating = false;
      User.instance = new User(id, name, gender, password, email, phone, address,deviceId);
      console.log(User.instance);
    }
    if (id != "-1") {
      User.instance.setData(id, name,password, email,gender, phone,address,deviceId);
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


export class order{
  id: string;
  orderDate: Date;
  acceptDate : Date;
  totalPrice: number;
  orderStatusId:string;
  statusName: string;
  address:string;
  orderItems : Array<orderItem>;
  
  constructor(id: string,
    orderDate: string,
    acceptDate: string,
    totalPrice: number,
    order_states_id ="1",
    address:string,

    
    ){
      this.id=id;
      this.orderDate= new Date(orderDate);
      this.acceptDate = new Date(acceptDate);
      this.totalPrice=totalPrice;
      this.orderStatusId = order_states_id;
      this.address = address;
      this.orderItems=new Array();
    }
}


export class orderStatus{
  id : string ; 
  name : string;
  constructor(id , name){
    this.id = id;
    this.name = name;
  }
}
export class orderItem{
  productName: string;
  cost: number;
  

  constructor(ProductName,cost){ 
    this.productName = ProductName;
    this.cost = cost;
  }


}


