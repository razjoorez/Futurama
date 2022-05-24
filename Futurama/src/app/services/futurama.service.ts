import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class FuturamaService {
// private characterStore: {
//   characters: Characters[];
// }
  
  
  url: string = 'https://api.sampleapis.com/futurama/';
  constructor(private http: HttpClient) { 
  }

  getInfo(): Observable<Info[]> {
   return this.http.get<Info[]>(this.url + 'info')
  }

  getCharacters() {
    return '';
  }
}
