import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../../front-portafolio/interfaces/proyects.interface';

@Pipe({
  name: 'proyectFilter',
  standalone: true,
})

export class ProyectFilterPipe implements PipeTransform {
  transform(value: Project[], search: string): Project[] {
    if(!search) return value;
    search = search.toLowerCase();

    return value.filter(project =>
      project.name.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technologies.some((tech: string) => tech.toLowerCase().includes(search))
    );
  }
}