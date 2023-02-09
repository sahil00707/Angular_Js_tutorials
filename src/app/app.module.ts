import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
//import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
   // FormComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
