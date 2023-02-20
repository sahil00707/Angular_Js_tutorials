import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { FormGroup,FormControl } from '@angular/forms';
import {MyserviceService} from './services/myservice.service';
import { MyserviceService2 } from './services/myservice2.service';
//import {UserDataService} from './users/user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent  implements OnInit{
  mytasks:string[]=[];
  ngOnInit(): void {
 this.mytasks=new MyserviceService2().service2();
  }
 
  myform=new FormGroup({
    name:new FormControl('dhruvi')
  });
 
  getData(){
    console.log(this.myform.value)
  }
//green="green"
}
