import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly experience = portfolioData.experience;
}