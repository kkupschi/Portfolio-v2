import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Field = 'name' | 'email' | 'message' | 'privacy';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  privacy = false;

  touched: Record<Field, boolean> = {
    name: false,
    email: false,
    message: false,
    privacy: false,
  };

  sent = false;

  markTouched(field: Field): void {
    this.touched[field] = true;
  }

  private isEmailValid(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  showError(field: Field): boolean {
    if (!this.touched[field]) return false;

    if (field === 'name') return this.name.trim().length < 2;
    if (field === 'email') return !this.isEmailValid(this.email);
    if (field === 'message') return this.message.trim().length < 10;
    if (field === 'privacy') return !this.privacy;

    return false;
  }

  get formValid(): boolean {
    return (
      this.name.trim().length >= 2 &&
      this.isEmailValid(this.email) &&
      this.message.trim().length >= 10 &&
      this.privacy
    );
  }

  submit(): void {
    this.touched.name = true;
    this.touched.email = true;
    this.touched.message = true;
    this.touched.privacy = true;

    if (!this.formValid) return;

    this.sent = true;

    // Optional: reset after success
    // this.name = '';
    // this.email = '';
    // this.message = '';
    // this.privacy = false;
  }
}
