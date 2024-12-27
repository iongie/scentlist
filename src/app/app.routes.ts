import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'formula',
        loadComponent: () => import('./pages/formula/formula.component').then(c => c.FormulaComponent)
    },
    {
        path: 'basket-formula',
        loadComponent: () => import('./pages/basket-formula/basket-formula.component').then(c => c.BasketFormulaComponent)
    },
];
