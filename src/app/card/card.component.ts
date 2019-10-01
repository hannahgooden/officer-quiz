import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question-service/question.service';
import shuffle from 'shuffle-array';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() question_index : number;
  questions: Array<Object> = [];
  
  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.getAllQuestions();
  }

  ngOnInit() {
  }

}



