import { RouterState } from '@ngrx/router-store';

import { ProfileState } from '../../+profile/reducers/';

export interface State {
  router: RouterState,

  profile: ProfileState
}
