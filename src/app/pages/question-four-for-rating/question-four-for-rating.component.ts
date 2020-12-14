import { Component, OnInit } from '@angular/core';
import { DataService } from '../../dataservice';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { ReviewDialogComponent } from 'src/app/components/review-dialog/review-dialog.component';
import { StartScreenComponent } from '../start-screen/start-screen.component';
import { Professor } from 'src/app/customInterfaces';

interface Grade {
  letter: string;
  viewLetter: string;
  numVal: number;
}

@Component({
  selector: 'app-question-four-for-rating',
  templateUrl: './question-four-for-rating.component.html',
  styleUrls: ['./question-four-for-rating.component.css']
})

export class QuestionFourForRatingComponent implements OnInit {
  // to be used in html file to ensure letter grade is selected before button displayed
  public selectedGrade: number;

  commendations: string[];
  concerns: string[];
  courseId: string;
  grade: number;
  professor: Professor;
  user: string;

  constructor(public dialog: MatDialog, private db: AngularFirestore, public dataservice: DataService) { }

  ngOnInit(): void {

  }

  grades: Grade[] = [
    { letter: 'A', viewLetter: 'A', numVal: 4.0 },
    { letter: 'A-', viewLetter: 'A-', numVal: 3.7 },
    { letter: 'B+', viewLetter: 'B+', numVal: 3.3 },
    { letter: 'B', viewLetter: 'B', numVal: 3.0 },
    { letter: 'B-', viewLetter: 'B-', numVal: 2.7 },
    { letter: 'C+', viewLetter: 'C+', numVal: 2.3 },
    { letter: 'C', viewLetter: 'C', numVal: 2.0 },
    { letter: 'C-', viewLetter: 'C-', numVal: 1.7 },
    { letter: 'D+', viewLetter: 'D+', numVal: 1.3 },
    { letter: 'D+', viewLetter: 'D+', numVal: 1.0 },
    { letter: 'F', viewLetter: 'F', numVal: 0.0 },
  ];

  // To push all rating info to database
  pushToFirestore() {
    let ratingInfo = {
      commendations: [],
      concerns: [],
      courseId: this.db.doc('courses/cs336'),
      grade: 0,
      professor: '',
      user: '',
    }

    if (this.dataservice.commendations) {
      ratingInfo.commendations = this.dataservice.commendations;
    }
    if (this.dataservice.concerns) {
      ratingInfo.concerns = this.dataservice.concerns;
    }
    if (this.dataservice.course.id) {
      ratingInfo.courseId = this.db.doc('courses/' + this.dataservice.department.code + '-'
        + this.dataservice.course.id);
    }
    if (this.grade) {
      ratingInfo.grade = this.grade;
    }
    console.log(this.dataservice.professor);
    if (this.dataservice.professor) {
      ratingInfo.professor =
        this.dataservice.professor.firstName.substr(0, 3) +
        this.dataservice.professor.lastName.substr(0, 3);
    }
    if (this.user) {
      ratingInfo.user = 'test1';
    }
    this.db.collection('ratings').add(ratingInfo);

    // popup to confirm rating
    const dialogRef = this.dialog.open(ReviewDialogComponent);
  }

}
