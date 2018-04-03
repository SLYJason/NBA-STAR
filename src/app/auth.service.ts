import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(2000), // simulate jwt token send to the server;
      tap(() =>  {
        // this.autoLogout(); // simulate jwt token will expire in 3 second after login.
        return this.isLoggedIn = true;
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  autoLogout() {
    setTimeout(() => this.isLoggedIn = false, 5000);
  }
}
