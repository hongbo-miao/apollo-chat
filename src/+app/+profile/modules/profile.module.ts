import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../../shared/modules/';
import { InfoComponent, ProfileComponent } from '../components/';
import { ProfileService } from '../services/';
import { ProfileEffects } from '../effects/';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,

    EffectsModule.run(ProfileEffects)
  ],
  providers: [
    ProfileService
  ],
  declarations: [
    InfoComponent,
    ProfileComponent
  ]
})
export class ProfileModule { }
