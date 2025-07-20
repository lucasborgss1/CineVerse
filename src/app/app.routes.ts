import { Routes } from '@angular/router';
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { PaginaMovies } from './pages/pagina-movies/pagina-movies';
import { PaginaSeries } from './pages/pagina-series/pagina-series';
import { PaginaAnimated } from './pages/pagina-animated/pagina-animated';
import { PaginaDocumentary } from './pages/pagina-documentary/pagina-documentary';

export const routes: Routes = [
  { path: '', redirectTo: 'cineverse', pathMatch: 'full' },
  {
    path: 'cineverse',
    component: PaginaInicial,
  },
  {
    path: 'movies',
    component: PaginaMovies,
  },
  {
    path: 'series',
    component: PaginaSeries,
  },
  {
    path: 'desenhos',
    component: PaginaAnimated,
  },
  {
    path: 'docs',
    component: PaginaDocumentary,
  },
];
