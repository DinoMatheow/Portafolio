import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TechnologyComponent } from './pages/technology/technology.component';

@Component({
  selector: 'app-tech-profile',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './techProfile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./techProfile.component.css'
})
export class TechProfileComponent { }
