import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss'],
})
export class ImprintComponent {}
