import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-two-for-rating',
  templateUrl: './question-two-for-rating.component.html',
  styleUrls: ['./question-two-for-rating.component.css']
})
export class QuestionTwoForRatingComponent implements OnInit {

  commendations : Commendation[] = [
    {name: 'Low homework', selected: false, color: 'primary'},
    {name: 'Easy grading', selected: false, color: '#00ff00'},
    {name: 'Great lectures', selected: false, color: '#00ff00'},
    {name: 'Group projects', selected: false, color: '#00ff00'},
    {name: 'Good, quick feedback', selected: false, color: '#00ff00'},
    {name: 'Will learn a lot', selected: false, color: '#00ff00'},
    {name: 'Fun Labs', selected: false, color: '#00ff00'},

  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNext() {
    this.router.navigate([`${'/question-three-for-rating'}`]);
  }

}

interface Commendation {
  name: string;
  selected: boolean;
  color: string;
}