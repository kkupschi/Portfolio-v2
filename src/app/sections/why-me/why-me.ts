import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.html',
  styleUrls: ['./why-me.scss'],
})
export class WhyMeComponent {
  lang = inject(LanguageService);
}
