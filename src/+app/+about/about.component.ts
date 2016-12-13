import { Component, Inject } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'about',
  template: `
    About component
    {{(author | async)?.firstName}}
    {{(author | async)?.lastName}}
  `
})
export class AboutComponent {
  author: ApolloQueryObservable<ApolloQueryResult>;

  constructor(
    @Inject('req') req: any,
    private apollo: Angular2Apollo) {
    // console.log('req',  req)
  }

  ngOnInit() {
    this.author = this.apollo.watchQuery({
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
