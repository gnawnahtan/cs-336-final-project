import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ConfirmDialogComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  // called when "Yes" on dialog is pressed
  close(): void {
    this.dialog.close();
    this.router.navigate([`${'/login-screen'}`]);
  }

}
