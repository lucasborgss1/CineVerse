import { CommonModule } from '@angular/common';
import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isInputFocused = false;
  query = '';
  isHovered = false;

  @Output() filterSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  selectFilter(filter: string) {
    this.filterSelected.emit(filter);
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
