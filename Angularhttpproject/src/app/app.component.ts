import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularhttpproject';

  name;
  constructor(private dataservice: DataserviceService)
  {
this.gedata();
  }
  gedata() {
    this.dataservice.getdata()
      // tslint:disable-next-line:ban-types
      .subscribe(data  => {
        console.log(data);
        this.name = data;
      });
  }
}
