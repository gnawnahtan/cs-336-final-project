import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-two-for-rating',
  templateUrl: './question-two-for-rating.component.html',
  styleUrls: ['./question-two-for-rating.component.css']
})
export class QuestionTwoForRatingComponent implements OnInit {

  commendations : Commendation[] = [{name: 'Low homework', selected: false, color: 'primary'}, {name: 'Easy grader', selected: false, color: '#00ff00'},];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Commendation {
  name: string;
  selected: boolean;
  color: string;
}