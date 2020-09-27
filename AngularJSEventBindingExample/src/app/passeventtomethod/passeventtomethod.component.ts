import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passeventtomethod',
  templateUrl: './passeventtomethod.component.html',
  styleUrls: ['./passeventtomethod.component.css']
})
export class PasseventtomethodComponent implements OnInit {

  constructor() { }


  input = '';

  ngOnInit() {
  }
  onKey(value: string) {
    this.input += value + ' $ ';
  }
}
