import { Component } from '@angular/core';
import { FormData } from '../form-data';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  form=new FormData('sahil',12,'male','mango',12);
}
