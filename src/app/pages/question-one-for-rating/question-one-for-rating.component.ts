import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
  }

  professors: Professor[] = [
    {name: 'Keith Vander Linden', viewName: 'Keith Vander Linden'},
    {name: 'Victor Norman', viewName: 'Victor Norman'},
    {name: 'Joel Adams', viewName: 'Joel Adams'},
  ];

}