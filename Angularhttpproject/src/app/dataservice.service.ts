import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

 configUrl = 'http://localhost:5000/helloword';

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    "Access-Control-Allow-Origin": "*",
    
  } ),responseType: 'text' as 'json'
};

getdata() {
 
   return this.http.get(this.configUrl,this.httpOptions);
}
}
