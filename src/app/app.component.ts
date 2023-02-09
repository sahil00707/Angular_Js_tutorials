import { Component } from '@angular/core';

import { FormData } from './form-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form=new FormData('sahil',12,'male','mango',12);
}
