import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieService } from '../../services/movie-service';
import { Footer } from '../../components/footer/footer';
import { MediaItem } from '../../models/models';
import { CommonModule } from '@angular/common';
import { NgbdCarouselPause } from '../../components/ngbd-carousel-pause/ngbd-carousel-pause';
import { CardsList } from '../../components/cards-list/cards-list';
import { MovieDetails } from '../../components/movie-details/movie-details';
@Component({
  selector: 'app-pagina-experiencia',
  imports: [
    Header,
    Footer,
    CommonModule,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
  ],
  templateUrl: './pagina-experiencia.html',
  styleUrl: './pagina-experiencia.css',
})
export class PaginaExperiencia implements OnInit {
  upcomingList: MediaItem[] = [];
  trendingList: MediaItem[] = [];
  topRatedMoviesList: MediaItem[] = [];
  topRatedTvList: MediaItem[] = [];
  carouselData: MediaItem[] = [];

  isCarouselLoaded = false;
  isUpcomingLoaded = false;
  isTrendingLoaded = false;
  isTopRatedMoviesLoaded = false;
  isTopRatedTvLoaded = false;

  selectedMedia: any = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');

    this.movieService
      .getDataDefault('movie', 'upcoming')
      .subscribe((response) => {
        this.upcomingList = response.results;
        this.isUpcomingLoaded = true;
      });

    this.movieService.getTrending('all', 'day').subscribe((response) => {
      this.carouselData = response.results.slice(0, 5);
      this.trendingList = response.results;
      this.isTrendingLoaded = true;
      this.isCarouselLoaded = true;
    });

    this.movieService
      .getDataDefault('tv', 'top_rated')
      .subscribe((response) => {
        this.topRatedTvList = response.results;
        this.isTopRatedTvLoaded = true;
      });

    this.movieService
      .getDataDefault('movie', 'top_rated')
      .subscribe((response) => {
        this.topRatedMoviesList = response.results;
        this.isTopRatedMoviesLoaded = true;
      });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
