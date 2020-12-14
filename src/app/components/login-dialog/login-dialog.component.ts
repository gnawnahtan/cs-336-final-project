import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<LoginDialogComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  // called when "Yes" on dialog is pressed
  close(): void {
    this.dialog.close();
    this.router.navigate([`${'/login-screen'}`]);
  }

}
