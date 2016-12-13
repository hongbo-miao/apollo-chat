import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/modules/';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LazyRoutingModule
  ],
  declarations: [
    LazyComponent
  ]
})
export class LazyModule { }
