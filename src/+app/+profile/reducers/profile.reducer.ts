import { ActionReducer, Action } from '@ngrx/store';

import { ProfileActions } from '../actions/';

export interface ProfileState {
  firstName: string,
  lastName: string
}

const initialState: ProfileState = {
  firstName: '',
  lastName: ''
};

export const profileReducer: ActionReducer<ProfileState> = (state = initialState, action: Action) => {
  switch (action.type) {
    case ProfileActions.PROFILE_GET_PROFILE_SUCCESS: {
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    }

    case ProfileActions.PROFILE_UPDATE_PROFILE_SUCCESS: {
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    }

    default: {
      return state;
    }
  }
};
