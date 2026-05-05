import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
})
export class LegalNoticeComponent {}