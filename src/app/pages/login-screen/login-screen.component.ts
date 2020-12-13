import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  // visibility of password - show/hide
  public visibility: boolean = false;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    //sample insert

    // this.firestore.collection<ProfessorRec>('professors').add({
    //   id: 1,
    //   firstName: 'Keith',
    //   lastName: 'Vander Linden',
    // });
  }

  // navigate to start screen
  goToStart() {
    this.router.navigate([`${'/start-screen'}`]);
  }

  // navigate to registration screen
  goToRegister() {
    this.router.navigate([`${'/register'}`]);
  }

  // toggle visibility of password
  showPassword(): void {
    this.visibility = !this.visibility
  }

}

export interface ProfessorRec {
  id: number,
  firstName: string,
  lastName: string,
}