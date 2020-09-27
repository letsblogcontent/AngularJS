import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwowaypropertychangeComponent } from './twowaypropertychange/twowaypropertychange.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingwithNGModelComponent } from './twowaybindingwith-ngmodel/twowaybindingwith-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaypropertychangeComponent,
    OnewaybindingComponent,
    TwowaybindingwithNGModelComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
