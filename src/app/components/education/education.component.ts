import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly education = portfolioData.education;
}