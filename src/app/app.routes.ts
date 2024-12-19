import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'formula',
        pathMatch: 'full'
    },
    {
        path: 'formula',
        loadComponent: () => import('./pages/formula/formula.component').then(c => c.FormulaComponent)
    },
    {
        path: ':type',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
];
