import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service/question.service';

function initializeAnswers(questions) : Array<Array<number>> {
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
  
  questions: Array<Object> = [];
  question_index = 0;
  answers: Array<Array<number>> = [];
  
  public firstQuestion() {
    this.question_index = 0;
  }
  
  public nextQuestion() {
    if (this.question_index < this.questions.length - 1) {
      this.question_index++;
    }
  }
  
  public previousQuestion() {
    if (this.question_index > 0) {
      this.question_index--;
    }
  }
  
  public lastQuestion() {
    this.question_index = this.questions.length - 1;
  }
    
  public isEmpty(array: Array<number>) : Boolean {
    if (array === undefined || array.length == 0) {
      return true;
    } else return false;
  }

  public checkAnswers() : Boolean {
    return this.answers.every( answer => !this.isEmpty(answer) );
  }

  constructor(private questionService: QuestionService) { 
    this.questions = this.questionService.getAllQuestions();
    this.answers = initializeAnswers(this.questions);
  }
  
  ngOnInit() {
  }

}
