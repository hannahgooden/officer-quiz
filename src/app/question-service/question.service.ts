import { Injectable } from '@angular/core';
import shuffle from 'shuffle-array';
import questions from './questions.json';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  questions = questions;

  constructor() {
    for (let i = 0; i < questions.length; i++) {
      shuffle(questions[i].answers);
    }
  }

  public getAllQuestions() : Array<Object> {
    return this.questions;
  }
  
  public getQuestionByIndex(index : number) : Object {
    return this.questions[index];
  }
  
}
