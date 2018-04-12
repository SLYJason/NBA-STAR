import { Component } from '@angular/core';

@Component({
  selector: 'app-input-search',
  template: `
    <div class="form-group">
      <label for="player">Name:</label>
      <input type="text" class="form-control" id="player">
    </div>
  `,
  styles: [`
    input[type="text"] {
      outline: none;
      width: 30%;
    }
  `]
})
export class InputSearchComponent {

}
