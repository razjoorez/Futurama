import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Characters } from '../models/characters';
import { Info } from '../models/info';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})



export class FuturamaService {

  private _characters: BehaviorSubject<Characters[]>;
// private chr:any;
  private characterStore: {
    characters: Characters[] 
  };

  private _questions: BehaviorSubject<Quiz[]>;

  private quizStore: {
    quizes: Quiz[];
    score: number;
    id: number;
  }

  url: string = 'https://api.sampleapis.com/futurama/';

  constructor(private http: HttpClient) { 
            this.characterStore = {characters: []=[]};
            this._characters = new BehaviorSubject<Characters[]>([]);
            this._questions = new BehaviorSubject<Quiz[]>([]);
            this.quizStore = {quizes:[]=[] , score: 0, id: 1};
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

  loadQuestions() {
    this.http.get<Quiz[]>(this.url + 'questions').subscribe(
      (data)=> {
        this.quizStore.quizes = data;
        this._questions.next(Object.assign({}, this.quizStore).quizes);
      }
    )
  }
  get questions(): Observable<Quiz[]> {
    return this._questions.asObservable();
  }

  getQuizById(id: number) {
    return this.quizStore.quizes.find(x => x.id == id);
  }
    
  
}


