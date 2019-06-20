import { AutoCompleteService } from 'ionic2-auto-complete';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AutoCompleteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutoCompleteProvider implements AutoCompleteService {
  seartchable :Array<any>;
  labelAttribute = "name";
  formValueAttribute = ""

  constructor(public http: HttpClient) {
    this.seartchable = new Array();
    this.seartchable.push("mohammed");
    this.seartchable.push("test");
    this.seartchable.push("hello");
    this.seartchable.push("world");
    this.seartchable.push("angular");
    this.seartchable.push("js");
    this.seartchable.push("ionic");
    console.log('Hello AutoCompleteProvider Provider');
  }
  getResults(keyword:string){
    return this.seartchable.filter((item:string)=>item.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
  }

}
