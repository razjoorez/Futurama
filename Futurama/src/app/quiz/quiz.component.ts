import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { FuturamaService } from '../services/futurama.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quiz$:  Observable<Quiz[]>= new Observable<Quiz[]>();
  currentQuiz: any = [];
  constructor(private futuramaService: FuturamaService) { }

  ngOnInit(): void {
    this.futuramaService.loadQuestions();
    this.quiz$ = this.futuramaService.questions;
    this.futuramaService.questions.subscribe(
      data => {
        this.currentQuiz = this.futuramaService.getQuizById(1);
        console.log('current quiz', this.currentQuiz);
      }
    )
   // this.currentQuiz = this.futuramaService.getQuizById(1);
  }

}
