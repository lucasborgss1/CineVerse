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
  selector: 'app-pagina-documentary',
  imports: [
    Header,
    Footer,
    CommonModule,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
  ],
  templateUrl: './pagina-documentary.html',
  styleUrl: './pagina-documentary.css',
})
export class PaginaDocumentary {
  moviesDocumentary: MediaItem[] = [];
  seriesDocumentary: MediaItem[] = [];

  carouselData: MediaItem[] = [];

  selectedMedia: any = null;

  isMoviesLoaded = false;
  isSeriesLoaded = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getDataByGenre('movie', 99).subscribe((response) => {
      for (let index = 0; index < 5; index++) {
        this.carouselData.push(response.results[index]);
      }
      this.moviesDocumentary = response.results;
      this.isMoviesLoaded = true;
    });

    this.movieService.getDataByGenre('tv', 99).subscribe((response) => {
      this.seriesDocumentary = response.results;
      this.isSeriesLoaded = true;
    });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
