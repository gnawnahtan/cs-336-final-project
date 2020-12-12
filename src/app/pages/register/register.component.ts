import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public visibility: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

    // toggle visibility of password
    showPassword(): void {
      this.visibility = !this.visibility
    }

}
