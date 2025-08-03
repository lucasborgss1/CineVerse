import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MOVIE_GENRES, TV_GENRES } from '../../models/models';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule, CommonModule, NgbDropdownModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isInputFocused = false;
  query = '';
  isHovered = false;
  movieGenres: { id: number; name: string }[] = [];
  tvGenres: { id: number; name: string }[] = [];

  @Output() filterSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.movieGenres = Object.entries(MOVIE_GENRES).map(([id, name]) => ({
      id: Number(id),
      name
    }));
    
    this.tvGenres = Object.entries(TV_GENRES).map(([id, name]) => ({
      id: Number(id),
      name
    }));
  }

  selectFilter(filter: string) {
    this.filterSelected.emit(filter);
  }
  
  navigateToGenre(mediaType: string, genreId: number, genreName: string) {
    this.router.navigate(['/busca'], {
      queryParams: { mediaType, genreId, genreName }
    });
  }

  handleSearch() {
    const trimmedQuery = this.query.trim();
    if (trimmedQuery) {
      this.router.navigate(['/busca'], {
        queryParams: { q: trimmedQuery },
      });
    }
  }
}
