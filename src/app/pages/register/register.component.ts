import { Component, OnInit,  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    //this.db.collection<Item>('/users')//, ref => ref.orderBy('timestamp')).valueChanges({ idField: 'docID' }).subscribe(res => {
    //   this.messages = [];
    //   res.forEach(element =>
    //     this.messages.push(element)
    //   )});
  }

  async accountGen(){
    let data = []
  
  
    let username = document.getElementById('loginU')
    if(username) 
    {
      let val = (username as HTMLInputElement).value;
      data.push({key: "username", value: val})
    }
  
  
    let password = document.getElementById('loginP')
    if(password)
    {
      let val = (password as HTMLInputElement).value;
      data.push({key: "password", value: val})
    }
    await this.db.collection('users').add(data);
  }

}

// interface Item{
//   username: string,
//   password: string
// }
