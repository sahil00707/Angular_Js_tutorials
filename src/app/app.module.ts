import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

import { Router, RouterModule, ROUTES, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { MyserviceService } from './services/myservice.service';
import { MyserviceService2 } from './services/myservice2.service';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent,

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIf,
 
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [MyserviceService,MyserviceService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
