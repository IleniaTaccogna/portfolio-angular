import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./home-page/home-page.component').then(c=> c.HomepageComponent)},
    { path: 'home-page', loadComponent: () => import('./home-page/home-page.component').then(c=> c.HomepageComponent)},
    { path: 'chi-siamo', loadComponent: () => import('./about-as/about-as.component').then(c=> c.AboutAsComponent)},
    { path: 'progetti', loadComponent: () => import('./projects/projects.component').then(c=> c.ProjectsComponent)},
    { path: 'contatti', loadComponent: () => import('./contacts/contacts.component').then(c=> c.ContactsComponent)},
    {path: 'lista-contatti', loadComponent: () => import('./contacts-list/contacts-list.component').then(c=> c.ContactsListComponent)},
    { path: 'card', loadComponent: () => import('./card/card.component').then(c=> c.CardComponent)},
    { path: 'footer', loadComponent: () => import('./footer/footer.component').then(c=> c.FooterComponent)},

];
