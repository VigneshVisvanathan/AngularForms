import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:7000/register';
  _url2 = 'http://localhost:7000/login';
  constructor(private _http: HttpClient) { }

  register(userData) {
    return this._http.post<any>(this._url, userData);
  }

  login(userData) {
    return this._http.post<any>(this._url2, userData);
  }

}
