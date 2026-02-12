import { Component } from '@angular/core';

import { HeroComponent } from '../../sections/hero/hero';
import { WhyMeComponent } from '../../sections/why-me/why-me';
import { SkillsComponent } from '../../sections/skills/skills';
import { ProjectsComponent } from '../../sections/projects/projects';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials';
import { ContactComponent } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WhyMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}