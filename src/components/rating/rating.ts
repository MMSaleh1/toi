import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {
  @Input('rating') rating;
  @Input('starts') starCount;
  @Input('prodId') prodId;
  text: string;
  fullStarts : number;
  halfStar:boolean;
  emptyStarts:number;
  fullStartsArr :Array<any>;
  emptySartsArr :Array<any>;
  ratedStars:number;
  ratedStarsEmpty:number;
  doneRating:boolean;
  readyToRate : boolean;

  body:string;
  title:string;
  constructor(public navCntrl : NavController) {
 this.fullStartsArr = new Array();
 this.emptySartsArr = new Array();
 this.body="";
 this.title="";
  }
  ngOnInit(){
    if(this.starCount == null){
      this.starCount =5;
    }
    this.emptySartsArr.length=this.starCount;

    this.doneRating=false;
    this.readyToRate=false;
   
  }

  rate(count,type){
    if(type == 0){

      this.fullStartsArr.length=count+1;
      
    }else{
      
      this.fullStartsArr.length+=count+1;
      
      
    }
    this.emptySartsArr.length= this.starCount-this.fullStartsArr.length;
    //console.log(this.fullStartsArr.length)

  }

  confirm(){
    this.navCntrl.pop();
  }
  ionViewDidLeave(){
   console.log(this.fullStartsArr.length)
  }
  




   async addReview(){
     //console.log(this.body);
    //console.log(this.title);
    // let temp = await this.userProv.rate(this.prodId,this.ratedStars,this.body,this.title);
   // console.log(temp);
    }

   





}
