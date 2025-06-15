import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  standalone: true,
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent { }
