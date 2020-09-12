import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css']
})
export class SecondpageComponent implements OnInit {
  private sub:any;
  constructor(private route: ActivatedRoute) { }
  id = 0;

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {

      this.id = params['id'];

      console.log(this.id);
  });
}

}
