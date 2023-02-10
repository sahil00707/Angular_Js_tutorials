import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {UserDataService} from './users/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 user:any;
 getApi(){
  this. userData.users().subscribe((data)=>this.user=data);

 }
 
  constructor( private userData:UserDataService){
      this.getApi();
          
  }

}
