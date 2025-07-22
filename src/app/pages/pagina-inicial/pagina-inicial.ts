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
  selector: 'app-pagina-inicial',
  imports: [
    Header,
    Footer,
    CommonModule,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
  ],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
})
export class PaginaInicial implements OnInit {
  upcomingList: MediaItem[] = []; //em breve ()
  trendingList: MediaItem[] = []; //em alta
  topRatedMoviesList: MediaItem[] = []; //filmes bem avaliados
  topRatedTvList: MediaItem[] = []; //programas de tv bem avaliados
  carouselData: MediaItem[] = [];

  selectedMedia: any = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getDataDefault('movie', 'upcoming')
      .subscribe((response) => {
        this.upcomingList = response.results;
      });

    this.movieService.getTrending('all', 'day').subscribe((response) => {
      for (let index = 0; index < 5; index++) {
        this.carouselData.push(response.results[index]);
      }
      this.trendingList = response.results;
    });

    this.movieService
      .getDataDefault('tv', 'top_rated')
      .subscribe((response) => {
        this.topRatedTvList = response.results;
      });

    this.movieService
      .getDataDefault('movie', 'top_rated')
      .subscribe((response) => {
        this.topRatedMoviesList = response.results;
      });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
