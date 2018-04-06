import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <h3>ADMIN</h3>
    <nav>
      <button routerLink="./dashboard" routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }" class="btn btn-info">Dashboard</button>
      <button routerLink="./start-lineup" class="btn btn-info">Start Lineup</button>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [`
    .active {
      background-color: red;
    }
  `]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
