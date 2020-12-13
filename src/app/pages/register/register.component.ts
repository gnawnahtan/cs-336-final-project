import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // visibility of password - show/hide
  public visibility: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  // toggle visibility of password
  showPassword(): void {
    this.visibility = !this.visibility
  }

}
