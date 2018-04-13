import { Component } from '@angular/core';

@Component({
  selector: 'app-input-search',
  template: `
    <div>
      <label for="player"></label>
      <input type="text" id="player" placeholder="Type...">
    </div>
  `,
  styles: [`
    input[type="text"] {
      outline: none;
      width: 20%;
      height: 2.5rem;
      border: 1px solid #000000;
      border-radius: .5rem;
      text-indent: .5rem;
    }
    input[type="text"]::placeholder {
      font-weight: bold;
      font-size: 1.2rem;
      text-indent: .5rem;
    }
  `]
})
export class InputSearchComponent {

}
