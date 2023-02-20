import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http'

import {MyserviceService} from './services/myservice.service';
import { MyserviceService2 } from './services/myservice2.service';
//import {UserDataService} from './users/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent  implements OnInit{
  user:any;
  mytasks:string[]=[];
  ngOnInit(): void {
 this.mytasks=new MyserviceService2().service2();
  }
 
 
//green="green"
}
