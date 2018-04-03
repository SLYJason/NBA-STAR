import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-detail',
  template: `
    <section class="container">
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
    </section>
  `,
  styles: [`
    :host {
      margin: 1rem;
    }
  `]
})
export class CrisisDetailComponent implements OnInit {
  editName: string;
  constructor() { }

  ngOnInit() {
  }

}
