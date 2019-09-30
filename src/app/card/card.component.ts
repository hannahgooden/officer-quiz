import { Component, OnInit, Input } from '@angular/core';
import shuffle from 'shuffle-array';
import questions from '../questions.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() question_index : number;
  questions = questions;
  
  constructor() {
  }

  ngOnInit() {
  }

}
