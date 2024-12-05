import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'natural',
        pathMatch: 'full'
    },
    {
        path: ':type',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
];
