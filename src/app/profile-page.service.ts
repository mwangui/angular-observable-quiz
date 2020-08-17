import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfile } from './profile';
@Injectable({
  providedIn: 'root'
})
export class ProfilePageService {
  url = '/assets/data/data.json';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(this.url);
  }

}
