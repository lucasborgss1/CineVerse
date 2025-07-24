import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { HeaderExperiencia } from '../../components/header-experiencia/header-experiencia';
import { Background } from '../../components/background/background';

@Component({
  selector: 'app-pagina-experiencia',
  imports: [Footer, CommonModule, HeaderExperiencia, Background],
  templateUrl: './pagina-experiencia.html',
  styleUrl: './pagina-experiencia.css',
})
export class PaginaExperiencia implements OnInit {
  selectedMedia: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('isLoggedIn');
  }

  onClickLogin() {
    this.router.navigate(['/login']);
  }
}
