import { Routes } from '@angular/router';
import { PaginaInicial } from './pages/pagina-inicial/pagina-inicial';
import { PaginaMovies } from './pages/pagina-movies/pagina-movies';
import { PaginaSeries } from './pages/pagina-series/pagina-series';
import { PaginaAnimated } from './pages/pagina-animated/pagina-animated';
import { PaginaDocumentary } from './pages/pagina-documentary/pagina-documentary';
import { PaginaQuery } from './pages/pagina-query/pagina-query';
import { AuthGuard } from './guards/auth.guard-guard';
import { Login } from './pages/login/login';
import { PaginaExperiencia } from './pages/pagina-experiencia/pagina-experiencia';

export const routes: Routes = [
  { path: '', redirectTo: 'experiencia', pathMatch: 'full' },

  {
    path: 'experiencia',
    component: PaginaExperiencia,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'cineverse',
    component: PaginaInicial,
    canActivate: [AuthGuard],
  },

  {
    path: 'movies',
    component: PaginaMovies,
    canActivate: [AuthGuard],
  },
  {
    path: 'series',
    component: PaginaSeries,
    canActivate: [AuthGuard],
  },
  {
    path: 'desenhos',
    component: PaginaAnimated,
    canActivate: [AuthGuard],
  },
  {
    path: 'docs',
    component: PaginaDocumentary,
    canActivate: [AuthGuard],
  },
  {
    path: 'busca',
    component: PaginaQuery,
    canActivate: [AuthGuard],
  },
];
