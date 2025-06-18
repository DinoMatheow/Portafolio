import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-soft-card',
  imports: [],
  templateUrl: './softCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./softCard.component.css',

})
export class SoftCardComponent { }
