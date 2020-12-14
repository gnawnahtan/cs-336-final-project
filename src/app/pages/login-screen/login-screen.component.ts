import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  accounts = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<Item>('/users', ref => ref.orderBy('username')).valueChanges({ idField: 'docID' }).subscribe(res => {
      this.accounts = [];
      res.forEach(element =>
        this.accounts.push(element)
      )});
  }

  login() {
    //sample insert

    // this.firestore.collection<ProfessorRec>('professors').add({
    //   id: 1,
    //   firstName: 'Keith',
    //   lastName: 'Vander Linden',
    // });
  }

  checkCreds(){
    let userVal;
    let passVal;
  
    let username = document.getElementById('loginU')
    if(username) 
    {
      userVal = (username as HTMLInputElement).value;
    }
  
  
    let password = document.getElementById('loginP')
    if(password)
    {
      passVal = (password as HTMLInputElement).value;
    }
    
    let exists = false;
    this.accounts.forEach(function (value){
      if (value.username == userVal && value.password == passVal) exists = true;
    })
    return exists
  }


}

interface Item {
  username: string,
  password: string
}

export interface ProfessorRec {
  id: number,
  firstName: string,
  lastName: string,
}