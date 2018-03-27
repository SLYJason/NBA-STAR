import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  template: `
    <p>
      compose-message works!
    </p>
    <button class="btn btn-danger" (click)="cancel()">Cancel</button>
  `,
  styles: []
})
export class ComposeMessageComponent implements OnDestroy {

  constructor(private router: Router) { }

  cancel() {
    // Providing a `null` value to the named outlet clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  ngOnDestroy() {
    this.cancel();
  }
}
