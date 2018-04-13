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
      position: absolute;
      bottom: 0;
      background-color: #9e9e9e;
      height: 10rem;
      width: 100vw;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  github = './assets/svg/github';
}
