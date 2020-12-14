import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
import { ReviewDialogComponent } from 'src/app/components/review-dialog/review-dialog.component';
import { StartScreenComponent } from '../start-screen/start-screen.component';

interface Grade {
  letter: string;
  viewLetter: string;
}

@Component({
  selector: 'app-question-four-for-rating',
  templateUrl: './question-four-for-rating.component.html',
  styleUrls: ['./question-four-for-rating.component.css']
})
export class QuestionFourForRatingComponent implements OnInit {

  // to be used in html file to ensure letter grade is selected before button displayed
  public selectedGrade: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  grades: Grade[] = [
    {letter: 'A', viewLetter: 'A'},
    {letter: 'A-', viewLetter: 'A-'},
    {letter: 'B+', viewLetter: 'B+'},
    {letter: 'B', viewLetter: 'B'},
    {letter: 'B-', viewLetter: 'B-'},
    {letter: 'C+', viewLetter: 'C+'},
    {letter: 'C', viewLetter: 'C'},
    {letter: 'C-', viewLetter: 'C-'},
    {letter: 'D', viewLetter: 'D'},
    {letter: 'F', viewLetter: 'F'},
  ];

  // Review Dialog component opened when user submits his review
  popup() {
    const dialogRef = this.dialog.open(ReviewDialogComponent);
  }
}
