import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MediaItem, MOVIE_GENRES, TV_GENRES } from '../../models/models';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  safeTrailerUrl!: SafeResourceUrl;
  trailer?: string;
  loadingTrailer = false;
  @Input() type?: string;
  @Input() media!: MediaItem;
  @Output() close = new EventEmitter<void>();

  constructor(
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const type = this.type || this.media.media_type || 'movie';
    this.loadingTrailer = true;

    this.movieService
      .getCredits('movie', this.media.id)
      .subscribe((response) => {
        console.log(response.cast);
        console.log(response.crew);
      });

    this.movieService
      .getTrailers(type, this.media.id)
      .pipe(take(1))
      .subscribe((response) => {
        const firstTrailer = response.results.find(
          (video) => video.site === 'YouTube' && video.type === 'Trailer'
        );
        this.trailer = firstTrailer?.key ?? '';
        this.loadingTrailer = false;

        if (this.trailer) {
          this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${this.trailer}?rel=0&autoplay=0`
          );
        }
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
