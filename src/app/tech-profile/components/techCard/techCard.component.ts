import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TechCategory, TechItem } from '../../interfaces/tech.interface';
import { TECH_DATA } from '../../../data/tech.data';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './techCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./techCard.component.css',
})
export class TechCardComponent {

  techData = signal(TECH_DATA);


  selected = signal<TechItem | null>(null);
  selectTech(item: TechItem) {
    this.selected.set(item);
  }

}
