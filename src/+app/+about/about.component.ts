import { Component, Inject } from '@angular/core';

@Component({
  selector: 'ac-about',
  template: 'About component'
})
export class AboutComponent {
  constructor(@Inject('req') req: any) {
    // console.log('req',  req)

  }
}