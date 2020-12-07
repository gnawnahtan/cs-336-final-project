import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

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

}

export interface ProfessorRec {
  id: number,
  firstName: string,
  lastName: string,
}