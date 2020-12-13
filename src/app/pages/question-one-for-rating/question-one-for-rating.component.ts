import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Professor{
  name: string;
  viewName: string
}

@Component({
  selector: 'app-question-one-for-rating',
  templateUrl: './question-one-for-rating.component.html',
  styleUrls: ['./question-one-for-rating.component.css']
})
export class QuestionOneForRatingComponent implements OnInit {

  public selectedProfessor: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  professors: Professor[] = [
    {name: 'Keith Vander Linden', viewName: 'Keith Vander Linden'},
    {name: 'Victor Norman', viewName: 'Victor Norman'},
    {name: 'Joel Adams', viewName: 'Joel Adams'},
  ];

  back(): void {
    this.router.navigate([`${'/course-selection-screen-for-rating'}`]);
  }

}