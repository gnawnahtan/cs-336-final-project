import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RotateProp } from '@fortawesome/fontawesome-svg-core';
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
    const dialogRef = this.dialog.open(DialogContent);
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent{

  constructor(public dialog: MatDialogRef<DialogContent>, private router: Router) {}

  close(): void {
    this.dialog.close();
    this.router.navigate([`${'/start-screen'}`]);
  }

}


