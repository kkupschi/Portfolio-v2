import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type TabKey = 'bookstore' | 'pokedex' | 'join' | 'ongoing';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent {
  lang = inject(LanguageService);
  activeTab: TabKey = 'bookstore';

  select(tab: TabKey): void {
    this.activeTab = tab;
  }
}
