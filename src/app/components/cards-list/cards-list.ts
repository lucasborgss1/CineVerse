import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MediaItem } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ContentCards } from '../content-cards/content-cards';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, ContentCards, CarouselModule],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.css',
})
export class CardsList {
  @Input() list: MediaItem[] = [];
  @Output() cardSelected = new EventEmitter<any>();
  get isLoaded(): boolean {
    return this.list && this.list.length > 0;
  }
  onCardClick(item: any) {
    this.cardSelected.emit(item);
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 7,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 5,
      numScroll: 1,
    },
  ];
}
