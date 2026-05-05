import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header *ngIf="showHeader"></app-header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `
})
export class AppComponent {

  showHeader = true;
  private hideHeaderOnRoutes = ['/legal-notice'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const url = e.urlAfterRedirects.split('?')[0];
        this.showHeader = !this.hideHeaderOnRoutes.includes(url);
      });
  }
}
