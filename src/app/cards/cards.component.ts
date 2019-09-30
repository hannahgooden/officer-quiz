import { Component, OnInit } from '@angular/core';
import questions from '../questions.json';

function initializeAnswers() : Array<Array<number>> {
  let answers = Array.apply(null, Array(questions.length));
  answers.fill([], 0, questions.length);
  return answers;
};


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  
  questions = questions;
  question_index = 0;
  answers = initializeAnswers();
  
  public firstQuestion() {
    this.question_index = 0;
  }
  
  public nextQuestion() {
    if (this.question_index < questions.length - 1) {
      this.question_index++;
    }
  }
  
  public previousQuestion() {
    if (this.question_index > 0) {
      this.question_index--;
    }
  }
  
  public lastQuestion() {
    this.question_index = questions.length - 1;
  }
    
  public isEmpty(array: Array<number>) : Boolean {
    if (array === undefined || array.length == 0) {
      return true;
    } else return false;
  }

  public checkAnswers() : Boolean {
    return this.answers.every( answer => !this.isEmpty(answer) );
  }

  constructor() { 
  }
  
  ngOnInit() {
  }

}
