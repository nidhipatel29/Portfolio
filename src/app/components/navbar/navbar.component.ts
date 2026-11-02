import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { NavigationLink } from '../../models/portfolio.model';
import { portfolioData } from '../../data/portfolio.data';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(window:scroll)': 'updateScrollState()',
  },
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  protected readonly portfolio = portfolioData;
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSection = signal('home');
  protected readonly theme = signal<Theme>('dark');
  protected readonly isScrolled = signal(false);

  private readonly document = inject(DOCUMENT);
  private sectionObserver?: IntersectionObserver;

  constructor() {
    const savedTheme = this.readSavedTheme();
    const prefersLight = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: light)').matches ?? false;
    this.setTheme(savedTheme ?? (prefersLight ? 'light' : 'dark'), false);
  }

  ngAfterViewInit(): void {
    this.updateScrollState();
    const view = this.document.defaultView;
    if (!view || !('IntersectionObserver' in view)) {
      return;
    }

    this.sectionObserver = new view.IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);
        const sectionId = visibleSections[0]?.target.id;
        if (sectionId) {
          this.activeSection.set(sectionId);
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    );

    this.document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => {
      this.sectionObserver?.observe(section);
    });
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected navigateTo(link: NavigationLink): void {
    this.activeSection.set(link.id);
    this.closeMenu();
  }

  protected toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark', true);
  }

  protected updateScrollState(): void {
    const hasScrolled = (this.document.defaultView?.scrollY ?? 0) > 24;
    if (this.isScrolled() !== hasScrolled) {
      this.isScrolled.set(hasScrolled);
    }
  }

  private readSavedTheme(): Theme | null {
    try {
      const savedTheme = this.document.defaultView?.localStorage.getItem('portfolio-theme');
      return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
    } catch {
      return null;
    }
  }

  private setTheme(theme: Theme, persist: boolean): void {
    this.theme.set(theme);
    this.document.documentElement.dataset['theme'] = theme;

    if (persist) {
      try {
        this.document.defaultView?.localStorage.setItem('portfolio-theme', theme);
      } catch {
        // The visual theme still works when browser storage is unavailable.
      }
    }
  }
}