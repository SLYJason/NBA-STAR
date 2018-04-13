import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <svg><use [attr.xlink:href]="iconPath"/></svg>
  `,
  styles: []
})
export class IconComponent implements OnChanges {
  @Input() iconPath: string;
  ngOnChanges() {
    console.log(this.iconPath);
  }
}
