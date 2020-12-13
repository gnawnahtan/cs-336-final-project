import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-profile-for-viewing',
  templateUrl: './course-profile-for-viewing.component.html',
  styleUrls: ['./course-profile-for-viewing.component.css']
})
export class CourseProfileForViewingComponent implements OnInit {

  commendations : Commendation[] = [
    {name: 'Low homework', selected: false, color: 'primary'},
    {name: 'Easy grading', selected: false, color: '#00ff00'},
  ];

  concerns : Concern[] = [
    {name: 'Boring lectures', selected: false},
    {name: 'Labs are long', selected: false},

  ];

  constructor() { }

  ngOnInit(): void {

  }

}

interface Commendation {
  name: string;
  selected: boolean;
  color: string;
}


interface Concern {
  name: string;
  selected: boolean;
}
