import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-proyect',
  imports: [TitleComponent],
  templateUrl: './proyect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectComponent {

  myTitle = signal('Proyects');

 }
