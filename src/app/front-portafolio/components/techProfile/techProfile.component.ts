import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TechnologyComponent } from './pages/technology/technology.component';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-tech-profile',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, RouterModule, TitleComponent],
  templateUrl: './techProfile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./techProfile.component.css'
})
export class TechProfileComponent {
  myTitle = signal('Tech & Soft Skills');

}
