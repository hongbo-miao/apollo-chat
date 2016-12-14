import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProfileActions } from '../actions/';
import { ProfileService } from '../services/';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  @Effect() getProfile$ = this.actions$
    .ofType(ProfileActions.PROFILE_GET_PROFILE)
    .switchMap(() => this.profileService.getProfile()
      .map(user => ({ type: ProfileActions.PROFILE_GET_PROFILE_SUCCESS, payload: user }))
      .catch(error => Observable.of({ type: ProfileActions.PROFILE_GET_PROFILE_FAIL, payload: error }))
    );

  @Effect() updateProfile$ = this.actions$
    .ofType(ProfileActions.PROFILE_UPDATE_PROFILE)
    .map<Action, any>(toPayload)
    .switchMap(({ firstName, lastName }) => this.profileService.updateProfile(firstName, lastName)
      .map(user => ({ type: ProfileActions.PROFILE_UPDATE_PROFILE_SUCCESS, payload: user }))
      .catch(error => Observable.of({ type: ProfileActions.PROFILE_UPDATE_PROFILE_FAIL, payload: error }))
    );
}
