import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectKey = 'bookstore' | 'pokedex' | 'join';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  selectedProject: ProjectKey = 'bookstore';

  setProject(key: ProjectKey): void {
    this.selectedProject = key;
  }

  getProjectPreviewSrc(): string {
    const map: Record<ProjectKey, string> = {
      bookstore: '/assets/projects/bookstore.png',
      pokedex: '/assets/projects/pokedex.png',
      join: '/assets/projects/join.png',
    };
    return map[this.selectedProject];
  }
}
