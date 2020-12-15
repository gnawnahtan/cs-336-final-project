import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.css']
})
export class WelcomeDialogComponent {

  constructor(public dialog: MatDialogRef<WelcomeDialogComponent>, private router: Router) {}

  // closes dialog and navigates back to start screen
  close(): void {
    this.dialog.close();
  }

}
