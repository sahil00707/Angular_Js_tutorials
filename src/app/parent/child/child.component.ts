import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{
name:string='';
  constructor(private router:ActivatedRoute){

  }
ngOnInit(): void {
  this.name=this.router.snapshot.params['name'];
}
//@Input() name='fedsfsd';
};
