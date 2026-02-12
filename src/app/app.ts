import { Component } from '@angular/core';

import { HeaderComponent } from './layout/header/header';
import { FooterComponent } from './layout/footer/footer';

import { HeroComponent } from './sections/hero/hero';
import { WhyMeComponent } from './sections/why-me/why-me';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { TestimonialsComponent } from './sections/testimonials/testimonials';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    HeaderComponent,
    HeroComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
