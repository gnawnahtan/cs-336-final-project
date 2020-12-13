import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.css']
})
export class ReviewDialogComponent {

  constructor(public dialog: MatDialogRef<ReviewDialogComponent>, private router: Router) {}

  close(): void {
    this.dialog.close();
    this.router.navigate([`${'/start-screen'}`]);
  }

}
