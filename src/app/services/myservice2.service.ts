import { Injectable } from "@angular/core";
import { MyserviceService } from "./myservice.service";
@Injectable()
export class MyserviceService2{
userdata:string[]=[];
service2(){
this.userdata=new MyserviceService().userData();
return this.userdata;
}

}