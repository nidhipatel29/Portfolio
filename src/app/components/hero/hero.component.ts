import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly portfolio = portfolioData;
  protected readonly activeFocusIndex = signal(0);
  private readonly document = inject(DOCUMENT);
  private focusTimer?: number;

  ngOnInit(): void {
    const view = this.document.defaultView;
    if (!view || (view.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)) {
      return;
    }

    this.focusTimer = view.setInterval(() => {
      this.activeFocusIndex.update((index) => (index + 1) % this.portfolio.rotatingFocuses.length);
    }, 2600);
  }

  ngOnDestroy(): void {
    if (this.focusTimer !== undefined) {
      this.document.defaultView?.clearInterval(this.focusTimer);
    }
  }
}