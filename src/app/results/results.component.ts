import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer-service/answer.service';
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
  
  constructor(private answerService: AnswerService) { 
    this.answers = this.answerService.getAllChosenAnswers();
    this.allAnswered = this.answerService.checkAnswers();
  }
  
  public getChartDataFromAnswers() : Object {
    // calculate scores
    // first initialize an object of officers with initial score of 0
    let chartData = {};
    this.officers.forEach(function(officer) {
      chartData[officer] = 0;
    });
    const numQuestions = this.answers.length;

    // increment scores, weighting if more than one officer has same answer
    this.answers.forEach(function(answer: any){
      let officers = answer.officers;
      officers.forEach(function(officer) {
        chartData[officer] += 1/officers.length;
      });
    });
    
    // convert to percentages
    Object.keys(chartData).forEach(function(officer) {
      chartData[officer] = chartData[officer] / numQuestions * 100;
      chartData[officer] = parseFloat(chartData[officer].toFixed(2));
    })

    return chartData;
  }

  public createChart() {
    this.chart = new Highcharts.Chart({
      chart: {
        renderTo: 'chart',
        type: 'bar',
      },
      title: {
        text: 'Your Scores'
      },
      xAxis: {
        categories: Object.keys(this.getChartDataFromAnswers())
      },
      yAxis: {
        title: {
          text: 'Score'
        },
        max: 100
      },
      series: [{
        name: 'Score',
        type: 'bar',
        data: Object.values(this.getChartDataFromAnswers())
      }],
      legend: {
        enabled: false
      },
      tooltip: {
        valueSuffix: "%"
      }
    });
  }

  ngOnInit() {
    this.allAnswered = this.answerService.checkAnswers();
    if(this.allAnswered) {
      this.createChart();
    }
  }

}
