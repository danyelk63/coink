import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'phone',
    loadComponent: () => import('./pages/phone/phone.page').then( m => m.PhonePage)
  },
  {
    path: 'personal-data',
    loadComponent: () => import('./pages/personal-data/personal-data.page').then( m => m.PersonalDataPage)
  },
  {
    path: 'eula',
    loadComponent: () => import('./pages/eula/eula.page').then( m => m.EulaPage)
  },
  {
    path: 'log',
    loadComponent: () => import('./pages/log/log.page').then( m => m.LogPage)
  },
];
