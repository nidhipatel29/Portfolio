import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly portfolio = portfolioData;
}