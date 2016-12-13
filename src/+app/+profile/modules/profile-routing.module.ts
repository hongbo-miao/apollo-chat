import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from '../components/';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent }
    ])
  ]
})
export class ProfileRoutingModule { }
