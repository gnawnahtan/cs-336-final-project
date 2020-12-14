import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrls: ['./log-out-dialog.component.css']
})
export class LogOutDialogComponent {

  constructor(public dialog: MatDialogRef<LogOutDialogComponent>, private router: Router) {}

  // called when "No" on dialog is pressed
  close(): void {
    this.dialog.close();
  }

  // called when "Yes" on dialog is pressed
  logOut(): void {
    this.dialog.close();
    this.router.navigate([`${'/login-screen'}`]);
  }

}
