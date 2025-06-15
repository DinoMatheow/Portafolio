import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-front-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLayoutComponent { }
