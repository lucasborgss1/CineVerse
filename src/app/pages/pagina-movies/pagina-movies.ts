import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MovieService } from '../../services/movie-service';
import { MediaItem } from '../../models/models';
import { NgbdCarouselPause } from '../../components/ngbd-carousel-pause/ngbd-carousel-pause';
import { CardsList } from '../../components/cards-list/cards-list';
import { MovieDetails } from '../../components/movie-details/movie-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-default',
  imports: [
    Header,
    Footer,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
    CommonModule,
  ],
  templateUrl: './pagina-movies.html',
  styleUrl: './pagina-movies.css',
})
export class PaginaMovies implements OnInit {
  nowPlayingMovies: MediaItem[] = [];
  popularMovies: MediaItem[] = [];
  topRated: MediaItem[] = [];
  upComing: MediaItem[] = [];
  carouselData: MediaItem[] = [];

  selectedMedia: any = null;

  isNowPlayingLoaded = false;
  isUpcomingLoaded = false;
  isPopularLoaded = false;
  isTopRatedLoaded = false;
  isCarouselLoaded = false;

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService
      .getDataDefault('movie', 'now_playing')
      .subscribe((response) => {
        this.carouselData = response.results.slice(0, 5);
        this.nowPlayingMovies = response.results;
        this.isNowPlayingLoaded = true;
        this.isCarouselLoaded = true;
      });

    this.movieService
      .getDataDefault('movie', 'upcoming')
      .subscribe((response) => {
        this.upComing = response.results;
        this.isUpcomingLoaded = true;
      });

    this.movieService
      .getDataDefault('movie', 'popular')
      .subscribe((response) => {
        this.popularMovies = response.results;
        this.isPopularLoaded = true;
      });

    this.movieService
      .getDataDefault('movie', 'top_rated', 3)
      .subscribe((response) => {
        this.topRated = response.results;
        this.isTopRatedLoaded = true;
      });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
