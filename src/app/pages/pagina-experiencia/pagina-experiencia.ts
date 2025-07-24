import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Footer } from '../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { HeaderExperiencia } from '../../components/header-experiencia/header-experiencia';
import { Background } from '../../components/background/background';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagina-experiencia',
  imports: [
    Footer,
    CommonModule,
    HeaderExperiencia,
    Background,
    NgbCarouselModule,
  ],
  templateUrl: './pagina-experiencia.html',
  styleUrl: './pagina-experiencia.css',
})
export class PaginaExperiencia implements OnInit {
  selectedMedia: any = null;
  images = ['/images/img1.png', '/images/img2.png', '/images/img3.png'];

  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('isLoggedIn');
  }

  onClickLogin() {
    this.router.navigate(['/login']);
  }
}
