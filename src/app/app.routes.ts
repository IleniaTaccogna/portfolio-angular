import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home-page/home-page.component').then(c=> c.HomepageComponent)},
    { path: 'home-page', loadComponent: () => import('./home-page/home-page.component').then(c=> c.HomepageComponent)},
    { path: 'chi-siamo', loadComponent: () => import('./chi-siamo/chi-siamo.component').then(c=> c.ChiSiamoComponent)},
    { path: 'progetti', loadComponent: () => import('./progetti/progetti.component').then(c=> c.ProgettiComponent)},
    { path: 'contatti', loadComponent: () => import('./contatti/contatti.component').then(c=> c.ContattiComponent)},
    { path: 'card', loadComponent: () => import('./card/card.component').then(c=> c.CardComponent)},
    { path: 'footer', loadComponent: () => import('./footer/footer.component').then(c=> c.FooterComponent)},
];
