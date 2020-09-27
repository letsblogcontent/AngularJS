import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
  message = '';

  ngOnInit() {
  }

  OnClick() {
 this.message = 'Clicked';
  }

  OnKeyPress() {
    this.message = 'Key pressed';
     }

     OnFocus() {
      this.message = 'On Focus';
     }




}
