import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwowaypropertychangeComponent } from './twowaypropertychange/twowaypropertychange.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TwowaypropertychangeComponent,
    OnewaybindingComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
