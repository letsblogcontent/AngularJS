import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeserviceService {

  constructor() { }


  print()
  {
    console.log('calling webservice');
  }

 

}
