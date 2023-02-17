import { Component } from '@angular/core';
import { Myf } from '../myf';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {

mydata=new Myf("Dhruvi","dhruvi144@gmail.com",'123456789')
}
