import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./title.component.css',
})
export class TitleComponent {

  title = input<string>('Tech & Soft Skills');

 }
