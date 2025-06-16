import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:'./skills.component.css'
})
export class SkillsComponent {
  activeTab: 'hard' | 'soft' = 'hard';
 }
