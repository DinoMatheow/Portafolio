import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ProyectComponent } from '../../components/proyect/proyect.component';
import { TechProfileComponent } from '../../components/techProfile/techProfile.component';
import { RouterOutlet } from '@angular/router';
import { ProfileSkillsComponent } from '../../../tech-profile/pages/profileSkills/profileSkills.component';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
    ProfileSkillsComponent,
    ProyectComponent,
    // RouterOutlet
  ],
  standalone: true,
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent { }
