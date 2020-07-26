import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Display data of Cars';
cars = [ 'city' , 'nexon', 'scorpio' ];

}
