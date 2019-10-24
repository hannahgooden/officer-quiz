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
    // officers and their order are hard coded in. parameterize this in the future 
    let chartData = {};
    this.officers.forEach(function(officer) {
      chartData[officer] = 0;
    });
    const numQuestions = this.answers.length;

    this.answers.forEach(function(answer: any){
      let officers = answer.officers;
      officers.forEach(function(officer) {

        if(officer == 'Hannah') {
          chartData['Hannah']+= 1/officers.length;
        }
        if(officer == 'Gabriel') {
          chartData['Gabriel']+= 1/officers.length;
        }
        if(officer == 'Marissa') {
          chartData['Marissa']+= 1/officers.length;
        }
        if(officer == 'Thomas') {
          chartData['Thomas']+= 1/officers.length;
        }
        if(officer == 'Edgar') {
          chartData['Edgar']+= 1/officers.length;
        }
        if(officer == 'Feras') {
          chartData['Feras']+= 1/officers.length;
        }
        if(officer == 'Mitchell') {
          chartData['Mitchell']+= 1/officers.length;
        }
        if(officer == 'Alsten') {
          chartData['Alsten']+= 1/officers.length;
        }
        if(officer == 'Yonathan') {
          chartData['Yonathan']+= 1/officers.length;
        }
        if(officer == 'Shrey') {
          chartData['Shrey']+= 1/officers.length;
        }
      });
    });
    
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
    // todo: protect the route by adding a check that results exist before rendering them
    this.allAnswered = this.answerService.checkAnswers();
    if(this.allAnswered) {
      this.createChart();
    }
  }

}
