import { Component, OnInit, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    //this.db.collection<Item>('/users')//, ref => ref.orderBy('timestamp')).valueChanges({ idField: 'docID' }).subscribe(res => {
    //   this.messages = [];
    //   res.forEach(element =>
    //     this.messages.push(element)
    //   )});
  }

  async accountGen() {
    let data = {
      username: null,
      password: null
    }


    if (this.username) {
      data.username = this.username;
    }
    if (this.password) {
      data.password = this.password;
    }

    this.db.collection('users').add(data);
  }

}

// interface Item{
//   username: string,
//   password: string
// }
