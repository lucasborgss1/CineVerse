import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaItem, MOVIE_GENRES, TV_GENRES } from '../../models/models';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  trailer?: string;
  @Input() media!: MediaItem;
  @Output() close = new EventEmitter<void>();

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getTrailers(this.media.media_type, this.media.id)
      .subscribe((response) => {
        const firstTrailer = response.results.find(
          (video) => video.site === 'YouTube' && video.type === 'Trailer'
        );
        this.trailer = firstTrailer?.key ?? '';
      });
  }

  closeDetails() {
    this.close.emit();
  }

  getGenres(media: MediaItem): string[] {
    const genresMap = media.media_type === 'tv' ? TV_GENRES : MOVIE_GENRES;
    return media.genre_ids.map((id) => genresMap[id]).filter(Boolean);
  }
}
