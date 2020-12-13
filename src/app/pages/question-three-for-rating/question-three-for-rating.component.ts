import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-three-for-rating',
  templateUrl: './question-three-for-rating.component.html',
  styleUrls: ['./question-three-for-rating.component.css']
})
export class QuestionThreeForRatingComponent implements OnInit {

  // array of concerns - to be displayed in angular material chips
  concerns : Concern[] = [
    {name: 'Lots of homework', selected: false},
    {name: 'Hard grading', selected: false},
    {name: 'Boring lectures', selected: false},
    {name: 'Will not learn much', selected: false},
    {name: 'Labs are too long', selected: false},
    {name: 'Difficult material', selected: false},
    {name: 'Hard Tests', selected: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Concern {
  name: string;
  selected: boolean;
}