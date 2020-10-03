import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclassandngstyle',
  templateUrl: './ngclassandngstyle.component.html',
  styleUrls: ['./ngclassandngstyle.component.css']
})
export class NgclassandngstyleComponent implements OnInit {

  constructor() { }
  flag = false;

  ngOnInit() {
  }

  changeClass() {
    this.flag = true;
  }

}
