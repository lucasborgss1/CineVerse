import { Routes } from '@angular/router';
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';

export const routes: Routes = [
  { path: '', redirectTo: 'CineVerse', pathMatch: 'full' }, // pathMatch é necessário
  {
    path: 'CineVerse',
    component: PaginaInicial,
  },
];
