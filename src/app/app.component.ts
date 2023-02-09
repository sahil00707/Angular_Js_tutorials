import { Component } from '@angular/core';

import { FormData } from './form-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list:any[]=[];
  addTask(input:string){
this.list.push({id:this.list.length,task:input});

  }
  removeTask(id:number){
this.list=this.list.filter(item=>item.id!==id);
  }
}
