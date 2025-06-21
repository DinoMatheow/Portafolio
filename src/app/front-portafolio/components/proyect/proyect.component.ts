import { ChangeDetectionStrategy, Component, signal, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { projects } from '../../../data/proyects.data';
import { NgClass } from '@angular/common';
import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-proyect',
  imports: [TitleComponent, NgClass],
  templateUrl: './proyect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./proyect.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectComponent implements OnInit, AfterViewInit {

  myTitle = signal('Proyects');


  proyects = signal(projects);

  searchQuery = signal('');

  ngOnInit() {
    console.log('Proyectos cargados:', this.proyects());
    // Registrar los elementos de Swiper
    register();
  }

  ngAfterViewInit() {
    console.log('Componente inicializado');
    // Inicializar swiper manualmente si es necesario
    setTimeout(() => {
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        console.log('Swiper encontrado:', swiperEl);
        // Configurar swiper
        Object.assign(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: true,
          pagination: true,
          breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
        });
        swiperEl.initialize();
      } else {
        console.log('Swiper no encontrado');
      }
    }, 100);
  }

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
