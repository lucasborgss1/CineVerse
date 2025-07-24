import { ApiResponse, MediaItem, VideoApiResponse } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3';

  private readonly TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTgxODc0NGMyYmUwMmYxYzZhYzQzMGFlOWRmOWMwNCIsIm5iZiI6MTczNjU1MjA3MC42ODEsInN1YiI6IjY3ODFhZTg2MDY5MGFjMDZlNzdiMTI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Kex1d-knxvgf2kFLv0_7o4xkDBB6visxW5Wi85o48Y';

  constructor(private http: HttpClient) {}
  // Método para pegar trending (tv, movie, all)
  getTrending(
    mediaType: 'tv' | 'movie' | 'all',
    timeWindow: 'day' | 'week' = 'day',
    language = 'pt-br'
  ): Observable<ApiResponse<MediaItem>> {
    const url = `${this.BASE_URL}/trending/${mediaType}/${timeWindow}?language=${language}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
      accept: 'application/json',
    });

    return this.http.get<ApiResponse<MediaItem>>(url, { headers });
  }

  getDataDefault(
    mediaType: 'tv' | 'movie',
    request:
      | 'top_rated'
      | 'upcoming'
      | 'popular'
      | 'now_playing'
      | 'airing_today'
      | 'on_the_air',
    pagina: number = 1
  ): Observable<ApiResponse<MediaItem>> {
    const url = `${this.BASE_URL}/${mediaType}/${request}?language=pt-br&page=${pagina}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
      accept: 'application/json',
    });

    return this.http.get<ApiResponse<MediaItem>>(url, { headers });
  }

  getTrailers(mediaType: string, id: number): Observable<VideoApiResponse> {
    const url = `${this.BASE_URL}/${mediaType}/${id}/videos?language=pt-br`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
      accept: 'application/json',
    });

    return this.http.get<VideoApiResponse>(url, { headers });
  }

  getDataByGenre(
    mediaType: 'tv' | 'movie',
    genre: number
  ): Observable<ApiResponse<MediaItem>> {
    const url = `${this.BASE_URL}/discover/${mediaType}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
      accept: 'application/json',
    });

    const params = new HttpParams()
      .set('language', 'pt-BR')
      .set('with_genres', genre.toString())
      .set('sort_by', 'popularity.desc');

    return this.http.get<ApiResponse<MediaItem>>(url, { headers, params });
  }

  searchMulti(query: string, page: number): Observable<ApiResponse<MediaItem>> {
    const url = `${this.BASE_URL}/search/multi`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.TOKEN}`,
      accept: 'application/json',
    });

    const params = new HttpParams()
      .set('query', query)
      .set('language', 'pt-BR')
      .set('include_adult', 'false')
      .set('page', page.toString());

    return this.http.get<ApiResponse<MediaItem>>(url, { headers, params });
  }
}
