import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  privacyAccepted = false;

  hovering = false;
  showError = false;

  getCheckboxIcon(): string {

    if (this.showError) {
      return '/assets/ui/checkbox-error.png';
    }

    if (this.privacyAccepted) {
      return '/assets/ui/checkbox-checked.png';
    }

    if (this.hovering) {
      return '/assets/ui/checkbox-hover.png';
    }

    return '/assets/ui/checkbox-default.png'; // <-- HIER angepasst
  }

  clearError() {
    this.showError = false;
  }

  submit() {
    if (!this.privacyAccepted) {
      this.showError = true;
      return;
    }

    console.log('Submit:', {
      name: this.name,
      email: this.email,
      message: this.message
    });

    // Reset
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
    this.showError = false;
  }
}
