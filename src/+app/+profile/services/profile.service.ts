import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';

@Injectable()
export class ProfileService {
  constructor(
    private apollo: Angular2Apollo
  ) {}

  getProfile(): Observable<ApolloQueryResult> {
    return this.apollo
      .watchQuery({
        query: gql`
          query getProfile {
            user {
              firstName
              lastName
            }
          }
        `
      })
      .map<ApolloQueryResult>(({ data }) => data.user)
      .catch(err => Observable.throw(err));
  }

  updateProfile(firstName: string, lastName: string): Observable<ApolloQueryResult> {
    return  this.apollo
      .mutate({
        mutation: gql`
          mutation updateProfile(
            $firstName: String!
            $lastName: String!
          ) {
            updateProfile(
              firstName: $firstName
              lastName: $lastName
            ) {
              firstName
              lastName
            }
          }
        `,
        variables: {
          firstName,
          lastName
        },
      })
      .map(({ data }: ApolloQueryResult) => data.updateProfile)
      .catch(err => Observable.throw(err));
  }
}
