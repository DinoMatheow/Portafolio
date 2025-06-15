import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ProyectComponent } from '../../components/proyect/proyect.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    SkillsComponent,
    ContactComponent,
    ProyectComponent],
  standalone: true,
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent { }
