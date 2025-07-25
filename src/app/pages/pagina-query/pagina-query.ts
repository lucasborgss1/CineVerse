import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { MediaItem } from '../../models/models';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ContentCards } from '../../components/content-cards/content-cards';
import { MovieDetails } from '../../components/movie-details/movie-details';
import { CardsList } from '../../components/cards-list/cards-list';
import { Background } from '../../components/background/background';
import { forkJoin } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-pagina-query',
  imports: [
    CommonModule,
    Header,
    Footer,
    MovieDetails,
    ContentCards,
    Background,
  ],
  templateUrl: './pagina-query.html',
  styleUrl: './pagina-query.css',
})
export class PaginaQuery implements OnInit {
  @Output() cardSelected = new EventEmitter<any>();
  resultados: MediaItem[] = [];
  loading = true;
  selectedMedia: any = null;
  queryText = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const query = params['q'];
      if (query) {
        this.loading = true;
        forkJoin([
          this.movieService.searchMulti(query, 1),
          this.movieService.searchMulti(query, 2),
          this.movieService.searchMulti(query, 3),
          this.movieService.searchMulti(query, 4),
        ]).subscribe(
          (responses) => {
            this.resultados = responses.flatMap((res) => res.results);
            this.loading = false;
          },
          (error) => {
            console.error('Erro na busca:', error);
            this.loading = false;
          }
        );
      }
    });
  }

  onCardClick(item: any) {
    this.cardSelected.emit(item);
  }

  openDetails(media: MediaItem) {
    this.selectedMedia = media;
  }
}
