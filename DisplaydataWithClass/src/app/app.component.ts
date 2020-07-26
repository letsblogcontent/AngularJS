import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Display Cars';
  cars = ['city', 'nexon' , 'vento'];

  newcars =[
new Car('city', 10),
new Car('polo', 5),
new Car('vento', 6),
  ];
}
