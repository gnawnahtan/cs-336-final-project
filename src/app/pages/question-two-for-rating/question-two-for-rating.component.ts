import { Component, OnInit } from '@angular/core';
import { DataService } from '../../dataservice';

@Component({
  selector: 'app-question-two-for-rating',
  templateUrl: './question-two-for-rating.component.html',
  styleUrls: ['./question-two-for-rating.component.css']
})
export class QuestionTwoForRatingComponent implements OnInit {

  commendations: Commendation[] = [
    { name: 'Low homework', selected: false },
    { name: 'Easy grading', selected: false },
    { name: 'Great lectures', selected: false },
    { name: 'Group projects', selected: false },
    { name: 'Good, quick feedback', selected: false },
    { name: 'Will learn a lot', selected: false },
    { name: 'Fun Labs', selected: false },
  ];

  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataservice.commendations = []
    this.commendations.forEach(elem => {
      if (elem.selected) {
        this.dataservice.commendations.push(elem.name);
      }
    })
  }
}

interface Commendation {
  name: string;
  selected: boolean;
}