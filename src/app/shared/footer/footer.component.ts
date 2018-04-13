import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <h1>
      footer works!
    </h1>
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

}
