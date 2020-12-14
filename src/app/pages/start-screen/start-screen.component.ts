import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogOutDialogComponent } from 'src/app/components/log-out-dialog/log-out-dialog.component';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // go to rating side of app
  goToRate() {
    this.router.navigate([`${'/course-selection-screen-for-rating'}`]);
  }

  // go to viewing side of app
  goToView() {
    this.router.navigate([`${'/course-selection-screen-for-viewing'}`]);
  }

  // opens up the log out dialog component
  popup() {
    const dialogRef = this.dialog.open(LogOutDialogComponent);
  }

}

