import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '../shared/material/material.module'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class QuizModule { }
