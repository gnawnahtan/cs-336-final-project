import { Component, OnInit } from '@angular/core';
import { DataService } from '../../dataservice';
import { Data, Router } from '@angular/router';

@Component({
  selector: 'app-question-three-for-rating',
  templateUrl: './question-three-for-rating.component.html',
  styleUrls: ['./question-three-for-rating.component.css']
})
export class QuestionThreeForRatingComponent implements OnInit {

  // array of concerns - to be displayed in angular material chips
  concerns: Concern[] = [
    { name: 'Lots of homework', selected: false },
    { name: 'Hard grading', selected: false },
    { name: 'Boring lectures', selected: false },
    { name: 'Will not learn much', selected: false },
    { name: 'Labs are too long', selected: false },
    { name: 'Difficult material', selected: false },
    { name: 'Hard Tests', selected: false },
  ];

  constructor(private router: Router, public dataservice: DataService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataservice.concerns = []
    this.concerns.forEach(elem => {
      if (elem.selected) {
        this.dataservice.concerns.push(elem.name);
      }
    })
  }

  // navigate to question four
  goToNext() {
    this.router.navigate([`${'/question-four-for-rating'}`]);
  }

}

interface Concern {
  name: string;
  selected: boolean;
}