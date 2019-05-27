import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootProvider } from '../root/root';

/*
  Generated class for the ItemsApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemsApiProvider extends RootProvider {

  private productApiController: string = "product/";
  private productsActionString: string = "get_all_products?";

  private categoriesApiController: string = "maincategory/";
  private categoriesActionString: string = "get_main_category?";

  private subCategoriesApiController: string = "sub_category/"
  private subCategoriesActionString: string = "get_sub_category?"

  private vendorsApiController: string = "vendor/";
  private vendorActionString: string = "get_all_vendors?";


  constructor(public http: HttpClient) {
    super(http);
  }

  public async getCategoriesNop(): Promise<any> {
    let subcat = await this.getSubCategoriesNop();
    return new Promise((resolve) => {
      this.http.get(`${RootProvider.APIURL4}${this.categoriesApiController}${this.categoriesActionString}`).subscribe((data: any) => {
        if (data == null || data.length == 0 ) {
          resolve([])
        }
        else {
          let catArray = new Array<Category>();
          for (let i = 0; i < data.length; i++) {
            let tempcats = new Array();
            if (data[i].Deleted == false) {
              if(subcat.length != 0){
                for (let j = 0; j < subcat.length; j++) {

                  if (data[i].Id == subcat[j].parent) {
                    tempcats.push(subcat[j]);
  
                   
                  }
  
                }
              }
             
              catArray.push(new Category(data[i].Name, data[i].Id, tempcats, data[i].PictureBinary, data[i].MimeType, data[i].ParentCategoryId, data[i].Deleted, true))

            }

          }
        
          resolve(catArray);
          

        }
      })
    })

  }



  
  public async getVendors(): Promise<any> {
    return new Promise((resolve) => {
      let temp = `${RootProvider.APIURL4}${this.vendorsApiController}${this.vendorActionString}`;
      this.http.get(temp).subscribe((data: any) => {
        if(data == undefined || data.length == 0){
          resolve([]);
        }else{
          let vendors = new Array<Vendor>();
          for(let i = 0 ;i< data.length;i++){
            
            data[i].Deleted == false ? vendors.push(new Vendor(data[i].vendor_id,data[i].Name,data[i].Description,data[i].Deleted,data[i].PictureBinary,data[i].AltAttribute,data[i].TitleAttribute,data[i].IsNew,data[i].Email)) : '';
          }
          resolve(vendors);
        }
       

      });
    })
  }

  public async getItemsNop(): Promise<any> {
    let comps = <Array<Vendor>> await this.getVendors();
    return new Promise((resolve) => {
     // console.log(`${RootProvider.APIURL4}Product`);
      this.http.get(`${RootProvider.APIURL4}${this.productApiController}${this.productsActionString}product`).subscribe((data: any) => {
        if (data == undefined || data.length == 0) {
          resolve([]);
        }
        else {
          let items: Product[] = new Array();
          //for(let i = 0 ; i < data.length ; i++){
          //  items[i] = new Product(data[i].item_name,data[i].item_id,data[i].item_type_id,data[i].item_img1,data[i].item_img2,data[i].inventory,data[i].measure_unit,data[i].item_long_desc,data[i].distributor_id,data[i].price ,data[i].offer_id , data[i].offer_name,data[i].discount_percentage,data[i].item_distributor_id,data[i].company_id);

          //}
          for (let i = 0; i < data.length; i++) {
            if(!data[i].Deleted){
              let specs = new Specs(data[i].Weight, data[i].Length, data[i].Height, data[i].Width);
              items.push(new Product(data[i].Name
                , data[i].Id
                , data[i].CategoryId
                , data[i].StockQuantity
                , specs
                , data[i].ShortDescription
                , data[i].VendorId
                , data[i].Price
                , data[i].FullDescription
                , data[i].ShowOnHomePage
                , data[i].AllowCustomerReviews
                , data[i].ApprovedRatingSum
                , data[i].NotApprovedRatingSum
                , data[i].IsShipEnabled
                , data[i].IsFreeShipping
                , data[i].AdditionalShippingCharge
                , data[i].DeliveryDateId
                , data[i].OrderMaximumQuantity
                , data[i].OrderMinimumQuantity
                , data[i].OldPrice
                , data[i].IsNew
                , data[i].MarkAsNewStartDateTimeUtc
                , data[i].MarkAsNewEndDateTimeUtc
                , data[i].PictureBinary
                , data[i].MimeType
                , data[i].rating
                , data[i].num_of_customers
              ))

            }
           
          
          }
          for(let i =0; i< items.length;i++)
          {
            for(let j = 0 ; j< comps.length;j++){
              if(items[i].distributerId == comps[j].id){
                items[i].company_name = comps[j].name;
              }
            }
          }          
          resolve(items);
        }
      })

    })

  }



  public async getSubCategoriesNop(): Promise<any> {
    let items = await this.getItemsNop();
    return new Promise((resolve) => {
      this.http.get(`${RootProvider.APIURL4}${this.subCategoriesApiController}${this.subCategoriesActionString}`).subscribe((data: any) => {
        // console.log(data);
        if (data == null || data.length == 0) {
          resolve([]);
        }
        else {
          let subcat = new Array()
          for (let i = 0; i < data.length; i++) {
            let Subitems = new Array();
            if (data[i].Deleted == false) {
              for (let j = 0; j < items.length; j++) {


                if (data[i].Id == items[j].product_subcat) {
                  Subitems.push(items[j])
                }

              }
              subcat.push(new Category(data[i].Name, data[i].Id, Subitems, data[i].PictureBinary, data[i].MimeType, data[i].ParentCategoryId, data[i].Deleted))

            }



          }

          for (let i = 0; i < subcat.length; i++) {
            let tempChildren = new Array();
            for (let j = 0; j < subcat.length; j++) {
              if (subcat[i].id === subcat[j].parent) {
                tempChildren.push(subcat[j])

              }
            }
            if (tempChildren.length > 0) {
              subcat[i].hasSubCates = true;
              subcat[i].children = new Array();
              subcat[i].children = tempChildren;
            }
          }
          console.log(subcat);
          resolve(subcat);
          // console.log(subcat);

        }
      })
    })

  }

  

}




export class Category {




  parentShow?: boolean = false;
  image: String;
  open: boolean;

  //////////////////////////////////////////
  id: string;
  name: string;
  parent?: string;
  children?: any[];
  hasSubCates: boolean;
  deleted: boolean;
  constructor(name: string = "", id: string = "", children: any, NewsCategoryImage: string = "", MimeType: string, Parent: string = "", deleted: boolean, hasSubCate: boolean = false) {
    this.name = name;
    this.id = id;
    this.image = ImageProcess.stringToImage(NewsCategoryImage, MimeType);
    this.parentShow = false;
    this.parent = Parent;
    this.open = false;
    this.deleted = deleted;
    this.children = children ? children : new Array();
    this.hasSubCates = hasSubCate;
  }



}

export class Vendor {

  id: string;
  email: string;
  deleted: boolean;
  image: string;
  altAttribute: string;
  titleAttribute: string;
  isNew: boolean;
  name: string;
  descr: string;
  constructor(id:string
    ,name: string
    , descrpition: string
    , deleted: boolean
    , pictureBinary: string
    , AltAttribute: string
    , titleAttribute: string
    , isNew: boolean
    , email: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.descr = descrpition;
    this.deleted = deleted;
    this.image = ImageProcess.stringToImage(pictureBinary, "image/jpeg");
    this.altAttribute = AltAttribute;
    this.titleAttribute = titleAttribute;
    this.isNew = isNew;
  }
}


export class Product {

  
  image2 ? : string;  
  
  measure_u? : string;
  distributerLinkId: string;
  discountPercentage:number;
//////////////////////////////
  
  discount: number = 0;
  image: string; 
  
  //colors: string[];
  //sizes: string[];
  //descriptions: string[];
  categories: Category[]; 
  company_id: string;
  love?: boolean = false;
  status?: string; 
  offer_id : string; 
  offer_name : string; 


  /////////////////////////////////
  id: string; //
  name: string; //
  product_subcat ? : number;//
  description? : string;//
  longDescription: string;//
  distributerId : string;//
  showOnHome: boolean;//
  //metaKeywords: string;
  allowCustomerReviews: boolean;//
  approvedRatingSum: number;//
  notApprovedRattingSum: number;//
  isShipEnabled: boolean;//
  isFreeShipping:boolean;//
  additionalShippingCharge: number;//
  DeliveryDateId: string;//
  quant ? : number;//
  orderMaxQuant: number;//
  orderMinQuant: number;//
  price: number;//
  currentPrice: number;//
  isNew: boolean;//
  newFromUTC: Date;
  newToUTC:Date;
  image1 ? : string;//
  specs: Specs//
  company_name : string;//
  rating: number ; //
  customerCount: number;//

   constructor(prod_name : string
    , itemId : string
    , prod_sub_category : number
    , quantity : number
    , specs : Specs
    , prod_desc : string
    , distributorId : string
    , price : number
    , longDesc: string
    , showOnHome:boolean
    , allaCustomerReview:boolean
    , approvedRatingSum:number
    , notApprovedRattingSum:number
    , isShipEnabled: boolean
    , isFreeShipping:boolean
    , additionalShippingCharge:number
    , DeliveryDateId:string
    , orderMaxQuant:number
    , orderMinQuant:number
    , oldPrice:number
    , New:boolean
    , newFromUTC: Date
    , newToUTC:Date
    , prod_image1 : string
    , imageMimeType:string
    , rating:number
    , customerCount:number
  ) { 
   
    
    
//////////////////////////////////////////////


    this.id = itemId; 
    this.name = prod_name;
    this.description = prod_desc; 
    this.specs =specs;
    this.image1 = ImageProcess.stringToImage(prod_image1,imageMimeType); //'assets/img/categories/girl/jewellery/jewellery01.jpg';
    this.quant = quantity;
    this.distributerId = distributorId;
    this.product_subcat = prod_sub_category;
    this.currentPrice=price;
    this.longDescription=longDesc;
    this.showOnHome=showOnHome;
    this.allowCustomerReviews=allaCustomerReview;
    this.approvedRatingSum=approvedRatingSum;
    this.notApprovedRattingSum=notApprovedRattingSum;
    this.isShipEnabled=isShipEnabled;
    this.isNew=New;
    this.isFreeShipping=isFreeShipping;
    this.additionalShippingCharge=additionalShippingCharge;
    this.DeliveryDateId=DeliveryDateId;
    this.orderMaxQuant=orderMaxQuant;
    this.orderMinQuant=orderMinQuant;
    this.newFromUTC=newFromUTC;
    this.newToUTC=newToUTC;
    this.price=oldPrice;
    this.rating = (rating == null)? 0 : rating;
    this.customerCount = customerCount;



  }
}


export class Specs{
  weight: number;
  length: number;
  height: number;
  width: number;
  additionalSpecs: Array<specialSpecs>;
  constructor(weight:number,length:number,height:number,width:number,additonalSpecs:Array<specialSpecs>=new Array()){
    this.weight=weight;
    this.length=length;
    this.height=height;
    this.width=width;
    this.additionalSpecs=new Array();
    this.additionalSpecs=additonalSpecs;
  }
  
}

export class specialSpecs{
  name:string;
  val:any;
}

export class ImageProcess{

  constructor(){

  }

  static stringToImage(imageData:string,mimeType:string,base:string="base64"):string{
    return "data:"+mimeType+";"+base+","+imageData;
  }
}

export class review{
  writerName:string;
  reviewTitle: string;
  reviewBody:string;
  creationDate:Date;
  constructor(wName:string,rTitle:string,rBody:string,date:Date){
    this.writerName = wName;
    this.reviewTitle = rTitle;
    this.reviewBody = rBody;
    this.creationDate = date;
  }

}