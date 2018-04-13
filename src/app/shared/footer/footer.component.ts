import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <app-icon [iconPath]="github"></app-icon>
  `,
  styles: [`
    :host{
      display: flex;
      justify-content: center;
      background-color: #9e9e9e;
      bottom: 0;
      height: 3rem;
      width: 100vw;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  github = './assets/svg/github';
}
