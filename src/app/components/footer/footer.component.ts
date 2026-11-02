import { ChangeDetectionStrategy, Component } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly name = portfolioData.name;
  protected readonly currentYear = new Date().getFullYear();
}