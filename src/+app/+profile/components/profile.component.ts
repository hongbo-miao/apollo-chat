import '@ngrx/core/add/operator/select';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../shared/models/';
import { ProfileState } from '../reducers/';
import { ProfileActions } from '../actions/';

@Component({
  selector: 'ac-profile',
  template: `
    <ac-info
      [firstName]="(profileModel$ | async)?.firstName"
      [lastName]="(profileModel$ | async)?.lastName"
      (updateProfile)="onUpdateProfile($event)">
    </ac-info>
  `
})
export class ProfileComponent implements OnInit {
  profileModel$: Observable<ProfileState>;

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.profileModel$ = this.store.select<ProfileState>('profile');
    this.store.dispatch({ type: ProfileActions.PROFILE_GET_PROFILE });
  }

  onUpdateProfile({ firstName, lastName }) {
    this.store.dispatch({ type: ProfileActions.PROFILE_UPDATE_PROFILE, payload: { firstName, lastName }});
  }
}
