import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss'],
})
export class PrivacyPolicyComponent {}
