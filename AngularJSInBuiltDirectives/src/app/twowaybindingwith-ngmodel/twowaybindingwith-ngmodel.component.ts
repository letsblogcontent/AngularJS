import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybindingwith-ngmodel',
  templateUrl: './twowaybindingwith-ngmodel.component.html',
  styleUrls: ['./twowaybindingwith-ngmodel.component.css']
})
export class TwowaybindingwithNGModelComponent implements OnInit {

  twowaycolor = 'red';
  onewaycolor = 'yellow';
  constructor() { }

  ngOnInit() {
  }

  click() {
    console.log('Two way color:' + this.twowaycolor);
  }

  clickme() {
    console.log('One way color:' + this.onewaycolor);
  }
}
