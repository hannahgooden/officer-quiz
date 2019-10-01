import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import questions from './questions.json';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
  }

  public getAllQuestions() : Array<Object> {
    return questions;
  }
  
}
