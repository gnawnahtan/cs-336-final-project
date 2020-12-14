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

  //generate objects to later be pushed to the database
  username : string = "";
  password : string = "";

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    //Essentially the same code from the chat app, clones a specific collection from the database and stores it in a local variable to be parsed.
    //Would cause massive slowdown with a sufficiently large database, not going to hinder us for the scope of this project.
    this.db.collection<User>('/users', ref => ref.orderBy('username')).valueChanges({ idField: 'docID' }).subscribe(res => {
      this.accounts = [];
      res.forEach(element =>
        this.accounts.push(element)
      )});
  }

  login() {
    this.checkCreds();
  }

  //Returns a boolean declaring whether or not the entered account actually exists.
  checkCreds(){
    let exists = false;
    console.log(this.accounts);
    let username = this.username;
    let password = this.password;

    //Parses through existing accounts.
    exists = this.accounts.some(function (value){
      return value.username === username && value.password === password;
    })

    //Route to the next screen ONLY if the account exists.
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