import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLayoutComponent { }
