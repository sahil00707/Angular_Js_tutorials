import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  mytasks:string[]=['sahil','dhruvi'];
   userData(){
  return this.mytasks;
   
}
addTask(task:string){
this.mytasks.push(task);
}
listOfTask(){
  return this.mytasks;
}
  constructor() { }
}
