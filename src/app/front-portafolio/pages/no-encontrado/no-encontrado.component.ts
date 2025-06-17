import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-no-encontrado',
  imports: [TitleComponent],
  templateUrl: './no-encontrado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./no-encontrado.component.css'
})
export class NoEncontradoComponent {

  myTitle = signal('Skills & Tools');



}
