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

  // opens up the log out dialog component
  popup() {
    const dialogRef = this.dialog.open(LogOutDialogComponent);
  }

}

