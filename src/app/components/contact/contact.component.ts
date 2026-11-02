import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { portfolioData } from '../../data/portfolio.data';
import { environment } from '../../../environments/environment';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly portfolio = portfolioData;
  protected readonly status = signal<SubmissionStatus>('idle');
  protected readonly statusMessage = signal('');

  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    message: ['', [Validators.required, Validators.maxLength(5000)]],
  });

  protected onSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid || this.status() === 'submitting') {
      return;
    }

    if (environment.formspreeEndpoint.includes('YOUR_FORM_ID')) {
      this.setStatus(
        'error',
        `The contact form is not connected yet. Email Nidhi at ${this.portfolio.email}.`,
      );
      return;
    }

    this.setStatus('submitting', 'Sending your message...');
    this.http
      .post(environment.formspreeEndpoint, this.contactForm.getRawValue(), {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.contactForm.reset();
          this.setStatus('success', 'Your message has been sent.');
        },
        error: () => {
          this.setStatus(
            'error',
            `Your message could not be sent. Email Nidhi at ${this.portfolio.email}.`,
          );
        },
      });
  }

  protected clearStatus(): void {
    if (this.status() === 'error') {
      this.setStatus('idle', '');
    }
  }

  private setStatus(status: SubmissionStatus, message: string): void {
    this.status.set(status);
    this.statusMessage.set(message);
  }
}