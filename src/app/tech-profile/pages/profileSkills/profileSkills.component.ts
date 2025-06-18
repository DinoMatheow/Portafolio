import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/components/title/title.component';
import { NgStyle } from '@angular/common';
import { SoftCardComponent } from '../../components/softCard/softCard.component';
import { TechCardComponent } from '../../components/techCard/techCard.component';

@Component({
  selector: 'app-profile-skills',
  imports: [TitleComponent, NgStyle, SoftCardComponent, TechCardComponent],
  templateUrl: './profileSkills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./profileSkills.component.css',
})
export class ProfileSkillsComponent {

  myTitle = signal('Tech & Soft Skills');

  activeTab = signal<'tech' | 'soft'>('tech');


 }
