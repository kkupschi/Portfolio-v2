import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TabKey = 'bookstore' | 'pokedex' | 'join' | 'ongoing';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
  
export class ProjectsComponent {
  activeTab: TabKey = 'bookstore';

  select(tab: TabKey): void {
    this.activeTab = tab;
  }
}