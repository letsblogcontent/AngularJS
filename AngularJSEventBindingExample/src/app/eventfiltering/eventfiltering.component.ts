import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventfiltering',
  templateUrl: './eventfiltering.component.html',
  styleUrls: ['./eventfiltering.component.css']
})
export class EventfilteringComponent implements OnInit {

  constructor() { }

  value = '';

  ngOnInit() {
  }
  onEnter(value: string) { this.value = value; }

}
