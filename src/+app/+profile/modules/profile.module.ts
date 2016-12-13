import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from '../components/';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
