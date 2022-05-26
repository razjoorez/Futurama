import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})



export class FuturamaService {

  private _characters: BehaviorSubject<Characters[]>;
// private chr:any;
  private characterStore: {
    characters: Characters[] 
  };

  url: string = 'https://api.sampleapis.com/futurama/';

  constructor(private http: HttpClient) { 
            this.characterStore = {characters: []=[]};
            this._characters = new BehaviorSubject<Characters[]>([]);
  }

  getInfo(): Observable<Info[]> {
   return this.http.get<Info[]>(this.url + 'info')
  }

  get characters(): Observable<Characters[]> {
    return this._characters.asObservable();
  }

  characterByID(id:number) {
    return  this.characterStore.characters.find(x=> x.id == id);
  }

  loadCharacters() {
    return this.http.get<Characters[]>(this.url + 'characters').subscribe(
      (data) => {
         this.characterStore.characters = data,
         this._characters.next(Object.assign({}, this.characterStore).characters)
         
      });
  }
}


