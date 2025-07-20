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
  selector: 'app-pagina-animated',
  imports: [
    Header,
    Footer,
    NgbdCarouselPause,
    CardsList,
    MovieDetails,
    CommonModule,
  ],
  templateUrl: './pagina-animated.html',
  styleUrl: './pagina-animated.css',
})
export class PaginaAnimated implements OnInit {
  filmesAnimacao: MediaItem[] = [];
  desenhos: MediaItem[] = [];
  seriesAnimacao: MediaItem[] = [];
  upComing: MediaItem[] = [];
  carouselData: MediaItem[] = [];

  selectedMedia: any = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDataByGenre('movie', 16).subscribe((response) => {
      for (let index = 0; index < 5; index++) {
        this.carouselData.push(response.results[index]);
      }
      this.filmesAnimacao = response.results;
    });

    this.movieService.getDataByGenre('tv', 16).subscribe((response) => {
      this.seriesAnimacao = response.results;
    });

    this.movieService.getDataByGenre('tv', 10762).subscribe((response) => {
      this.desenhos = response.results;
    });
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
