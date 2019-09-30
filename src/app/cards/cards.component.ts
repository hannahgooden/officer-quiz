import { Component, OnInit } from '@angular/core';
import questions from '../questions.json';

function initializeAnswers() : Array<number> {
  let answers = Array.apply(null, Array(questions.length));
  answers.fill(-1, 0, questions.length);
  return answers;
};

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  
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

  public checkAnswers() : Boolean {
    return this.answers.every( answer => answer !== -1 );
  }

  constructor() { 
  }
  
  ngOnInit() {
  }

}
