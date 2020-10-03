import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowaybindingwithNGModelComponent } from './twowaybindingwith-ngmodel/twowaybindingwith-ngmodel.component';
import { FormsModule } from '@angular/forms';
import { NgclassandngstyleComponent } from './ngclassandngstyle/ngclassandngstyle.component';
import { NgIfNgForNgSwitchComponent } from './ng-if-ng-for-ng-switch/ng-if-ng-for-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingwithNGModelComponent,
    NgclassandngstyleComponent,
    NgIfNgForNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
