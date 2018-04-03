import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  template: `
    <h3>Login Page</h3>
    <p>{{logMessage}}</p>
    <button class="btn btn-primary" (click)="login()">Login</button>
    <button class="btn btn-danger" (click)="logout()">Logout</button>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  logMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.logMessage = 'Logged: ' + this.authService.isLoggedIn;
  }

  login() {
    this.logMessage = 'Logging in...';
    this.authService.login()
      .subscribe(val => {
        console.log(this.logMessage)
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
