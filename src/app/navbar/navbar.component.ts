import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
category:string[]=["HeadPhones","Earphones","Speakers","Smart Watches"];
more:string[]=["Privacy Policy","Term & Conditions","About Us"];
}
