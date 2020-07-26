import { Component } from '@angular/core';

import { TeserviceService } from './teservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  provider : [ TeserviceService]
})
export class AppComponent {

  constructor(private test : TeserviceService) {  
this.test.print();
  }
  

  title = 'newserviceapp';
}
