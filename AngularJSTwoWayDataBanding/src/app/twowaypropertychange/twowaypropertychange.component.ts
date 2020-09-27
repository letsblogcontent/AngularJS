import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-twowaypropertychange',
  templateUrl: './twowaypropertychange.component.html',
  styleUrls: ['./twowaypropertychange.component.css']
})
export class TwowaypropertychangeComponent  {

  @Input()
  childcolor: string;

  @Output()
  childcolorChange = new EventEmitter<string>();


  change()  {
this.childcolor = 'green';
this.childcolorChange.emit(this.childcolor);
  }


}
