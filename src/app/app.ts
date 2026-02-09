import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Field = 'name' | 'email' | 'message' | 'privacy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  // Form values
  name = '';
  email = '';
  message = '';
  privacy = false;

  // Validation state (onBlur)
  touched: Record<Field, boolean> = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  // UI feedback
  sent = false;

  // ---- validation helpers ----
  private isEmail(value: string): boolean {
    // simple + robust enough for portfolio validation
    const v = value.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  get nameValid(): boolean {
    return this.name.trim().length >= 2;
  }

  get emailValid(): boolean {
    return this.isEmail(this.email);
  }

  get messageValid(): boolean {
    return this.message.trim().length >= 10;
  }

  get privacyValid(): boolean {
    return this.privacy === true;
  }

  get formValid(): boolean {
    return this.nameValid && this.emailValid && this.messageValid && this.privacyValid;
  }

  markTouched(field: Field): void {
    this.touched[field] = true;
  }

  showError(field: Field): boolean {
    if (!this.touched[field]) return false;

    switch (field) {
      case 'name':
        return !this.nameValid;
      case 'email':
        return !this.emailValid;
      case 'message':
        return !this.messageValid;
      case 'privacy':
        return !this.privacyValid;
    }
  }

  submit(): void {
    // mark everything touched so the user sees what's missing
    (Object.keys(this.touched) as Field[]).forEach((k) => (this.touched[k] = true));

    if (!this.formValid) return;

    this.sent = true;

    // reset values
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacy = false;

    // reset touched (so errors don't show immediately)
    (Object.keys(this.touched) as Field[]).forEach((k) => (this.touched[k] = false));
  }
}
