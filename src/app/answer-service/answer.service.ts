import { Injectable } from '@angular/core';
import { QuestionService } from '../question-service/question.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answers: Array<Object> = [];

  private initializeAnswers(questions) : Array<Object> {
    let array = Array.apply(null, Array(questions.length));
    array.fill({}, 0, questions.length);
    return array;
  };

  public getAllPossibleAnswers() : Array<string> {
    let questions : any = this.questionService.getAllQuestions();
    let array = [];
    questions.forEach(function(question) {
      let answers = question.answers;
      answers.forEach(function(answer) {
        let officers = answer.officers;
        officers.forEach(function(officer) {
          if(array.indexOf(officer) === -1) {
            array.push(officer);
          }
        })
      })
    });
    return array;
  }

  public getAllChosenAnswers() : Array<Object> {
    return this.answers;
  }

  // todo: look up how to tell if an object is empty
  public isEmpty(object: Object) : Boolean {
    if ( Object.entries(object).length === 0 && object.constructor === Object ) {
      return true;
    } else return false;
  }

  public checkAnswers() : Boolean {
    return this.answers.every( answer => !this.isEmpty(answer) );
  }

  public storeAnswer(answer : Object, index : number) {
    this.answers[index] = answer;
  }
  
  public resetAnswers() {
    this.answers = this.initializeAnswers(this.questionService.getAllQuestions());
  }

  constructor(private questionService: QuestionService) {
    this.answers = this.initializeAnswers(this.questionService.getAllQuestions());
  }
}
