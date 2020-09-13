import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input()
  name : string;

  @Output() newName = new EventEmitter<string>();

 
  ngOnInit() {
  }

  changeName(value: string) {
    console.log('value is' +value);
    this.newName.emit(value);
  }

}
