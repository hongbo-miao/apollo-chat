import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <nav>
    <a routerLinkActive="router-link-active" routerLink="home">Home</a>
    <a routerLinkActive="router-link-active" routerLink="about">About</a>
    <a routerLinkActive="router-link-active" routerLink="todo">Todo</a>
    <a routerLinkActive="router-link-active" routerLink="lazy">Lazy</a>
    <a routerLinkActive="router-link-active" routerLink="profile">Profile</a>
  </nav>
  <div>
    <main>
      <router-outlet></router-outlet>
    </main>
</div>
`
})
export class AppComponent {
}
