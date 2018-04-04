import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-five-detail',
  template: `
    <section class="container">
      <h3>{{editName}}</h3>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <div>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
      </div>
    </section>
  `,
  styles: [`
    :host {
      margin: 1rem;
    }
  `]
})
export class TopFiveDetailComponent implements OnInit {
  editName: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  save() {
  }
  cancel() {

  }

}
