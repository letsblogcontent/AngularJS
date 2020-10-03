import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-ng-if-ng-for-ng-switch',
  templateUrl: './ng-if-ng-for-ng-switch.component.html',
  styleUrls: ['./ng-if-ng-for-ng-switch.component.css']
})
export class NgIfNgForNgSwitchComponent implements OnInit {

  constructor() { }

  title = 'Display Cars';
  cars = ['city', 'nexon' , 'vento'];

  newcars = [
new Car('city', 10),
new Car('polo', 5),
new Car('vento', 6),
  ];

  ngOnInit() {
  }

}
