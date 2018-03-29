import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h3>Login Page</h3>
    <p>{{message}}</p>
    <button class="btn btn-primary" (click)="login()">Login</button>
    <button class="btn btn-danger" (click)="logout()">Logout</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  logMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.message = 'Logged: ' + this.authService.isLoggedIn;
  }

  set message(message: string) {
    this.logMessage = message;
  }

  get message(): string {
    return this.logMessage;
  }

  login() {
    this.authService.login()
      .subscribe(val => {
        console.log(val)
        console.log(this.authService.redirectUrl)
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : './admin';

        // Redirect the user
        this.router.navigate([redirect]);
      });
  }
  logout() {
    this.authService.logout();
  }
}
