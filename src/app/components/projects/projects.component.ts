import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projects = portfolioData.projects;
}