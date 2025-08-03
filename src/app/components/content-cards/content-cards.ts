import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgbPopoverModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaItem } from '../../models/models';

@Component({
  selector: 'app-content-cards',
  imports: [NgbPopoverModule, NgbRatingModule],
  templateUrl: './content-cards.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './content-cards.css',
})
export class ContentCards {
  @Input() src: string = '';
  @Input() placement: string = 'auto';
  @Input() title: string = '';
  @Input() vote_average: number = 0;
  @Input() data!: MediaItem;
  @Output() cardClick = new EventEmitter<any>();

  onClick() {
    this.cardClick.emit(this.data);
  }
}
