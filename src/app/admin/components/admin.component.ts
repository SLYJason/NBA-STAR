import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <h3>ADMIN</h3>
    <nav>
      <button routerLink="./dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }" class="btn btn-info">Dashboard</button>
      <button routerLink="./top-five" routerLinkActive="active" class="btn btn-info">Top Five</button>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [``]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
