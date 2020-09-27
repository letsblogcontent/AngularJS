import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJSInBuiltDirectives';
  flag = false;

  changeClass() {
    this.flag = true;
  }
}
