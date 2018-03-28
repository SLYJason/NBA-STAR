import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <h3>ADMIN</h3>
    <nav>
      <button routerLink="./" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }" class="btn btn-info">Dashboard</button>
      <button routerLink="./crises" routerLinkActive="active" class="btn btn-info">Manage Crises</button>
      <button routerLink="./heroes" routerLinkActive="active" class="btn btn-info">Manage Heroes</button>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [``]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
