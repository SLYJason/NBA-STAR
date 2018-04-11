import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="container jumbotron">
      <h3>NBA Players</h3>
    </header>
  `,
  styles: [`
    header {
      text-align: center;
      padding: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
