import { Component, OnInit, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Declare items to be inserted into the array.
  username: string;
  password: string;

  constructor(private db: AngularFirestore) { }

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
  }

}

// interface Item{
//   username: string,
//   password: string
// }
