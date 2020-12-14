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

  accounts : User[] = [];

  username : string = "";
  password : string = "";

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    this.db.collection<User>('/users', ref => ref.orderBy('username')).valueChanges({ idField: 'docID' }).subscribe(res => {
      this.accounts = [];
      res.forEach(element =>
        this.accounts.push(element)
      )
      //console.log(this.accounts);
    });
  }

  login() {
    this.checkCreds();
  }

  checkCreds(){
    
    let exists = false;
    console.log(this.accounts);
    let username = this.username;
    let password = this.password;

    //this.accounts.forEach(elem => console.log(elem));

    exists = this.accounts.some(function (value){
      return value.username === username && value.password === password;
    })

    console.log(exists);

    if(exists) {
      this.router.navigate([`${'/start-screen'}`]);
    }
  }


}

interface User {
  username: string,
  password: string
}

export interface ProfessorRec {
  id: number,
  firstName: string,
  lastName: string,
}