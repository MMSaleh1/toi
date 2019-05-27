import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BlogdetailPage } from '../blogdetail/blogdetail';
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {

  constructor(public navCtrl: NavController) {

  }
  
   blogdetail(){
    this.navCtrl.push(BlogdetailPage);
    }

}
