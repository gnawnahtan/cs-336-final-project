import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-three-for-rating',
  templateUrl: './question-three-for-rating.component.html',
  styleUrls: ['./question-three-for-rating.component.css']
})
export class QuestionThreeForRatingComponent implements OnInit {

  concerns : Concern[] = [{name: 'Lots of homework', selected: false}, {name: 'Hard grader', selected: false},];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Concern {
  name: string;
  selected: boolean;
}