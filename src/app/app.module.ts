import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Router, RouterModule, ROUTES, Routes } from '@angular/router';
//import { FormComponent } from './form/form.component';

const myrouter:Routes=[{
path:' ',
component:AppComponent
},
{
  path:'parent',
  component:ParentComponent
},
{
  path:'child/:id/:name',
  component:ChildComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
   
   
  
   // FormComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIf,
    RouterModule.forRoot(myrouter)
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
