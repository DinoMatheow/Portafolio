import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './techCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechCardComponent { }
