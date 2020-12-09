import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  public selectedGrade: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  grades: Grade[] = [
    {letter: 'A+', viewLetter: 'A+'},
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

  popup() {
    console.log("this worked");
    const dialogRef = this.dialog.open(DialogContent);
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent{

}


