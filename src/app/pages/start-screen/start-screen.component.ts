import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

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
  }

  logOut(): void {
    this.dialog.close();
    this.router.navigate([`${'/login-screen'}`]);
  }

}

