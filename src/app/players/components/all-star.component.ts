import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>NBA ALL STAR</h2>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AllStarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
