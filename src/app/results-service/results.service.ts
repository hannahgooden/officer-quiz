import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import officers from './officers.json';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }

  public getResultFromChartData(chartData) : string {
    return Object.keys(chartData).reduce((a, b) => chartData[a] > chartData[b] ? a : b);
  }

  public getOfficerDataFromResult(result) : Object {

    return {}
  }

  public getChartDataFromAnswers(officers, answers) : Object {
    // calculate scores
    // first initialize an object of officers with initial score of 0
    let chartData = {};
    officers.forEach(function(officer) {
      chartData[officer] = 0;
    });
    const numQuestions = answers.length;

    // increment scores, weighting if more than one officer has same answer
    answers.forEach(function(answer: any){
      let officers = answer.officers;
      officers.forEach(function(officer) {
        if (officers.length != 0) {
          chartData[officer] += 1/officers.length;
        }
      });
    });
    
    // convert to percentages
    Object.keys(chartData).forEach(function(officer) {
      chartData[officer] = chartData[officer] / numQuestions * 100;
      chartData[officer] = parseFloat(chartData[officer].toFixed(2));
    })

    return chartData;
  }

  public createChart(data) : Highcharts.Chart  {
    const chart = new Highcharts.Chart({
      chart: {
        renderTo: 'chart',
        type: 'bar',
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: Object.keys(data)
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
        data: Object.values(data)
      }],
      legend: {
        enabled: false
      },
      tooltip: {
        valueSuffix: "%"
      }
    });
    return chart;
  }

}
