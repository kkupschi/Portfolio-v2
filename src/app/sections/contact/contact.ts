import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  privacyAccepted = false;
  hovering = false;
  privacyTouched = false;
  submitState: 'idle' | 'success' | 'error' = 'idle';

  get canSubmit(): boolean {
    return this.form.valid && this.privacyAccepted;
  }

  getCheckboxIcon(): string {
    if (this.privacyTouched && !this.privacyAccepted) return '/assets/ui/checkbox-error.png';
    if (this.privacyAccepted) return '/assets/ui/checkbox-checked.png';
    if (this.hovering) return '/assets/ui/checkbox-hover.png';
    return '/assets/ui/checkbox-default.png';
  }

  onPrivacyChange() {
    this.privacyTouched = true;
  }

  fieldError(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  submit() {
    this.form.markAllAsTouched();
    this.privacyTouched = true;

    if (!this.canSubmit) return;

    this.submitState = 'success';
    this.form.reset();
    this.privacyAccepted = false;
    this.privacyTouched = false;
  }

  resetForm() {
    this.submitState = 'idle';
  }
}
