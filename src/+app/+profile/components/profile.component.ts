import '@ngrx/core/add/operator/select';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
// import { ApolloQueryResult } from 'apollo-client';
// import gql from 'graphql-tag';

import { State } from '../../shared/models/';
import { ProfileState } from '../reducers/';
import { ProfileActions } from '../actions/';

@Component({
  selector: 'ac-profile',
  template: `
    Hello
    <ac-info
      [firstName]="(profileModel$ | async)?.firstName"
      [lastName]="(profileModel$ | async)?.lastName">
    </ac-info>
    
    <button (click)="onGet()">Get</button>
    <button (click)="onChange()">Change</button>
  `
})
export class ProfileComponent implements OnInit {
  // user: Observable<ApolloQueryResult>;
  profileModel$: Observable<ProfileState>;

  constructor(
    private store: Store<State>,
    // private apollo: Angular2Apollo
  ) {}

  ngOnInit() {
    this.profileModel$ = this.store.select<ProfileState>('profile');

    // this.user = this.apollo
    //   .watchQuery({
    //     query: gql`
    //       query getProfile {
    //         user {
    //           firstName
    //           lastName
    //         }
    //       }
    //   `
    //   })
    //   .map(({data}) => data.user) as ApolloQueryObservable<ApolloQueryResult>;

  }

  onGet() {
    this.store.dispatch({ type: ProfileActions.PROFILE_GET_PROFILE });
  }

  onChange() {
    // this.apollo.mutate({
    //   mutation: gql`
    //     mutation changeName(
    //       $firstName: String!
    //       $lastName: String!
    //     ) {
    //       changeName(
    //         firstName: $firstName
    //         lastName: $lastName
    //       ) {
    //         firstName
    //         lastName
    //       }
    //     }
    //   `,
    //   variables: {
    //     firstName: 'Hongbo',
    //     lastName: 'Miao'
    //   },
    // }).then(({ data }: ApolloQueryResult) => {
    //   console.log('succ', data.changeName.firstName);
    // }).catch((error) => {
    //   console.log('fail', error);
    // });
  }
}
