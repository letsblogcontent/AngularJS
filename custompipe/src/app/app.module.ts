import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustompipeappendPipe } from './custompipeappend.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustompipeappendPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
