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
  officers: Array<string> = ['Hannah','Gabriel','Marissa','Thomas','Edgar','Feras','Mitchell','Alsten','Yonathan','Shrey'];

  constructor(private answerService: AnswerService) { 
    this.answers = this.answerService.getAllChosenAnswers();
  }

  public getChartDataFromAnswers() : Array<number> {
    // officers and their order are hard coded in. parameterize this in the future 
    let chartData = [0,0,0,0,0,0,0,0,0,0];
    this.answers.forEach(function(answer: any){
      let officers = answer.officers;
      officers.forEach(function(officer) {

        if(officer == 'Hannah') {
          chartData[0]++;
        }
        if(officer == 'Gabriel') {
          chartData[1]++;
        }
        if(officer == 'Marissa') {
          chartData[2]++;
        }
        if(officer == 'Thomas') {
          chartData[3]++;
        }
        if(officer == 'Edgar') {
          chartData[4]++;
        }
        if(officer == 'Feras') {
          chartData[5]++;
        }
        if(officer == 'Mitchell') {
          chartData[6]++;
        }
        if(officer == 'Alsten') {
          chartData[7]++;
        }
        if(officer == 'Yonathan') {
          chartData[8]++;
        }
        if(officer == 'Shrey') {
          chartData[9]++;
        }
      });
    });

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
        categories: this.officers
      },
      yAxis: {
        title: {
          text: 'Score'
        },
        max: 10
      },
      series: [{
        name: 'Score',
        type: 'bar',
        data: this.getChartDataFromAnswers()
      }],
      legend: {
        enabled: false
      }
    });
  }

  ngOnInit() {
    // todo: protect the route by adding a check that results exist before rendering them
    this.createChart();
  }

}
