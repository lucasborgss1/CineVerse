import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isInputFocused = false;
  query = '';
  isHovered = false;

  @Output() filterSelected = new EventEmitter<string>();

  selectFilter(filter: string) {
    this.filterSelected.emit(filter);
  }

  handleSearch() {
    if (this.query.trim()) {
      this.filterSelected.emit(this.query.trim());
    }
  }
}
