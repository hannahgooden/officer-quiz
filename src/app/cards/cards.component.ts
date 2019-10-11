import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question-service/question.service';
import { AnswerService } from '../answer-service/answer.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  
  questions: Array<Object> = [];
  question_index = 0;
  chosen_answer: Object = {};
  
  constructor(private questionService: QuestionService,
              private answerService: AnswerService) { 
    this.questions = this.questionService.getAllQuestions();
  }

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
    
  ngOnInit() {}

}
