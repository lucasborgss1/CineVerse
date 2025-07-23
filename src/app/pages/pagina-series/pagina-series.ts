import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CardsList } from '../../components/cards-list/cards-list';
import { NgbdCarouselPause } from '../../components/ngbd-carousel-pause/ngbd-carousel-pause';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../components/movie-details/movie-details';
import { MediaItem } from '../../models/models';
import { MovieService } from '../../services/movie-service';
@Component({
  selector: 'app-pagina-series',
  imports: [
    Header,
    Footer,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
    CommonModule,
  ],
  templateUrl: './pagina-series.html',
  styleUrl: './pagina-series.css',
})
export class PaginaSeries implements OnInit {
  seriesTrending: MediaItem[] = [];
  seriesTopRated: MediaItem[] = [];
  seriesAiringToday: MediaItem[] = [];
  seriesOnTheAir: MediaItem[] = [];
  carouselData: MediaItem[] = [];

  selectedMedia: any = null;

  isTrendingLoaded = false;
  isTopRatedLoaded = false;
  isAiringTodayLoaded = false;
  isOnTheAirLoaded = false;
  isCarouselLoaded = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrending('tv', 'day').subscribe((response) => {
      this.carouselData = response.results.slice(0, 5);
      this.seriesTrending = response.results;
      this.isTrendingLoaded = true;
      this.isCarouselLoaded = true;
    });

    this.movieService.getDataDefault('tv', 'top_rated', 2).subscribe((res) => {
      this.seriesTopRated = res.results;
      this.isTopRatedLoaded = true;
    });

    this.movieService.getDataDefault('tv', 'airing_today').subscribe((res) => {
      this.seriesAiringToday = res.results;
      this.isAiringTodayLoaded = true;
    });

    this.movieService.getDataDefault('tv', 'on_the_air', 3).subscribe((res) => {
      this.seriesOnTheAir = res.results;
      this.isOnTheAirLoaded = true;
    });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
