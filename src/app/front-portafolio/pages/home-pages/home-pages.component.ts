import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePagesComponent { }
