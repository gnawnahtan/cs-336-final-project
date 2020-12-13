import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // visibility of password - show/hide
  public visibility: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  // toggle visibility of password
  showPassword(): void {
    this.visibility = !this.visibility
  }

  // navigate to login screen
  goToLogin() {
    this.router.navigate([`${'/login-screen'}`]);
  }

}
