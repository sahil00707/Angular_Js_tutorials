import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
url = '	https://api.adviceslip.com/advice';

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get(this.url);
  }
}
