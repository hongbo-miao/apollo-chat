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
}
