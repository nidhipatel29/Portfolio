import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly skillGroups = portfolioData.skills;
}