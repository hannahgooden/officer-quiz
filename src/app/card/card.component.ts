import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question-service/question.service';
import { AnswerService } from '../answer-service/answer.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() question_index : number;
  questions: Array<Object> = [];
  question: Object = {};
  chosen_answer : Object;
  
  constructor(private questionService: QuestionService,
              private answerService: AnswerService) {
    this.questions = this.questionService.getAllQuestions();
  }

  public storeAnswer(answer : Object) {
    this.answerService.storeAnswer(answer, this.question_index);
  }

  ngOnInit() {
    this.question = this.questionService.getQuestionByIndex(this.question_index);
  }

}



