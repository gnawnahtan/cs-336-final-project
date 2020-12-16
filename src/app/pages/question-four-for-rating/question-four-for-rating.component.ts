import { Component, OnInit } from '@angular/core';
import { DataService } from '../../dataservice';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { ReviewDialogComponent } from 'src/app/components/review-dialog/review-dialog.component';
import { StartScreenComponent } from '../start-screen/start-screen.component';
import { Professor, User } from 'src/app/customInterfaces';

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
  public selectedGrade: Grade;

  commendations: string[];
  concerns: string[];
  courseId: string;
  grade: Grade;
  professor: Professor;
  user: User;

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
      commendations: (this.dataservice.commendations ? this.dataservice.commendations : []),
      concerns: (this.dataservice.concerns ? this.dataservice.concerns : []),
      courseId: (this.dataservice.course ? this.db.doc('courses/' + this.dataservice.department.code + '-'
        + this.dataservice.course.id).ref : null),
      grade: (this.selectedGrade ? this.selectedGrade.numVal : 0),
      professor: (this.dataservice.professor ?
        this.dataservice.professor.firstName.substr(0, 3).toLowerCase() +
        this.dataservice.professor.lastName.substr(0, 3).toLowerCase() : ''),
      user: ' test', //(this.dataservice.user.username ? this.dataservice.user.username : ''),
    }

    if (this.user) {
      ratingInfo.user = 'test1';
    }
    this.db.collection('ratings').add(ratingInfo);

    // popup to confirm rating
    const dialogRef = this.dialog.open(ReviewDialogComponent);
  }

}
