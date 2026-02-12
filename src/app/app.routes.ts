import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice';
import { ImprintComponent } from './pages/imprint/imprint';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: '**', redirectTo: '' }
];
