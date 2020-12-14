import { Component, OnInit, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Declare items to be inserted into the array.
  username: string;
  password: string;

  constructor(private router: Router, private db: AngularFirestore, public dialog: MatDialog) { }

  // visibility of password - show/hide
  public visibility: boolean = false;

  ngOnInit(): void {
  }

  //Generates an account in the database!
  async accountGen() {
    let data = {
      username: null,
      password: null
    }

    //Only modify the username/password if they're not empty.
    if (this.username) {
      data.username = this.username;
    }
    if (this.password) {
      data.password = this.password;
    }

    //Only push if they're not empty.
    if (data.username && data.password)
    {
    this.db.collection('users').add(data);
    }
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    this.goToLogin();
  }

  // toggle visibility of password
  showPassword(): void {
    this.visibility = !this.visibility
  }

  // navigate to login screen
  goToLogin() {
    this.router.navigate([`${'/login-screen'}`]);
  }

}

// interface Item{
//   username: string,
//   password: string
// }
