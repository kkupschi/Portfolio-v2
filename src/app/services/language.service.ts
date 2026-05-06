import { Injectable, signal, computed } from '@angular/core';
import { translations, type Lang, type Translations } from '../translate/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('de');
  readonly t = computed<Translations>(() => translations[this.lang()]);

  set(lang: Lang): void {
    this.lang.set(lang);
  }
}
