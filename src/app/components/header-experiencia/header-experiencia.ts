import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-experiencia',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './header-experiencia.html',
  styleUrl: './header-experiencia.css',
})
export class HeaderExperiencia {
  isInputFocused = false;
  query = '';
  isHovered = false;

  @Output() filterSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  goToExperiencia() {
    this.router.navigate(['/experiencia']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
