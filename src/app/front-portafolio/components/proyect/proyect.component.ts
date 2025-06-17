import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { projects } from '../../../data/proyects.data';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-proyect',
  imports: [TitleComponent, NgClass],
  templateUrl: './proyect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./proyect.component.css',
})
export class ProyectComponent {

  myTitle = signal('Proyects');


  proyects = signal(projects);

  searchQuery = signal('');



  getBadgeClass(tech: string): string {
    const bagdeClass: Record<string, string> = {
      JavaScript: 'badge badge-warning',
      TypeScript: 'badge badge-info',
      HTML: 'badge badge-error',
      CSS: 'badge badge-primary',
      'Tailwind CSS': 'badge badge-accent',
      Bootstrap: 'badge badge-secondary',
      RxJS: 'badge badge-success',
      React: 'badge badge-info',
      PostgreSQL: 'badge badge-neutral',
      Angular:'badge badge-error'
    };

    return bagdeClass[tech] || 'badge'; // por defecto solo badge
  }




 }
