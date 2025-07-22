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

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService
      .getDataDefault('movie', 'now_playing')
      .subscribe((response) => {
        for (let index = 0; index < 5; index++) {
          this.carouselData.push(response.results[index]);
        }
        this.nowPlayingMovies = response.results;
      });
    this.movieService
      .getDataDefault('movie', 'upcoming', 1)
      .subscribe((response) => {
        this.upComing = response.results;
      });

    this.movieService
      .getDataDefault('movie', 'popular')
      .subscribe((response) => {
        this.popularMovies = response.results;
      });

    this.movieService
      .getDataDefault('movie', 'top_rated', 3)
      .subscribe((response) => {
        this.topRated = response.results;
      });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
