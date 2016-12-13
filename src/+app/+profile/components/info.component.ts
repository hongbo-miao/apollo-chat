import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-info',
  template: `
    <span> {{firstName}} {{lastName}}</span>
  `
})
export class InfoComponent {
  @Input() firstName: string;
  @Input() lastName: string;
}
