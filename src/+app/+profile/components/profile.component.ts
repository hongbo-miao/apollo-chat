import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';

@Component({
  selector: 'profile',
  template: `
    Profile
    {{(author | async)?.firstName}}
    {{(author | async)?.lastName}}
  `
})
export class ProfileComponent implements OnInit {
  author: ApolloQueryObservable<ApolloQueryResult>;

  constructor(
    private apollo: Angular2Apollo) { }

  ngOnInit() {
    this.author = this.apollo
      .watchQuery({
        query: gql`
        query getAuthor {
          author {
            firstName
            lastName
          }
        }
      `
      })
      .map(({data}) => data.author) as ApolloQueryObservable<ApolloQueryResult>;
  }
}
