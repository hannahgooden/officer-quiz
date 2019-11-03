import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer-service/answer.service';
import { ResultsService } from '../results-service/results.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  answers: Array<Object>;
  chart: Highcharts.Chart;
  officers: Array<string> = this.answerService.getAllPossibleAnswers();
  allAnswered: Boolean;
  chartData: Object;
  result: string;
  
  constructor(private answerService: AnswerService,
              private resultsService: ResultsService) 
  { 
    this.answers = this.answerService.getAllChosenAnswers();
    this.allAnswered = this.answerService.checkAnswers();
  }
  
  ngOnInit() {
    this.allAnswered = this.answerService.checkAnswers();
    if(this.allAnswered) {
      this.chartData = this.resultsService.getChartDataFromAnswers(this.officers, this.answers);
      this.result = this.resultsService.getResultFromChartData(this.chartData);
      this.resultsService.createChart(this.chartData);
    }
  }

}
