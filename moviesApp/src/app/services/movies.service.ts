import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Movies } from '../interface/movies.interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey: string = '10f723d8c621254ce70f8ab08dcb5c4b'
  private baseUrl: string = environment.urlMovies;
  private year: number = 2022;
  private horror: number = 27;
  private drama: number = 18;
  private comedy: number = 35;
  private action: number = 28;
  private language: string = 'en-US'

  constructor(private http: HttpClient) { }

  getMovieHorror(horror : number) : Observable <Movies>{
    return this.http.get<Movies>(`${this.baseUrl}?api_key=${this.apiKey}&language=${this.language}&with_genres=${this.horror}&primary_release_year=${this.year}`)
  }

  getMovieDrama(drama : number) : Observable <Movies> {
    return this.http.get<Movies>(`${this.baseUrl}?api_key=${this.apiKey}&language=${this.language}&with_genres=${this.drama}&primary_release_year=${this.year}`)
  }

  getMovieComedy(comedy : number) : Observable <Movies>{
    return this.http.get<Movies>(`${this.baseUrl}?api_key=${this.apiKey}&language=${this.language}&with_genres=${this.comedy}&primary_release_year=${this.year}`)
  }

  getMovieAction(action : number) : Observable <Movies>{
    return this.http.get<Movies>(`${this.baseUrl}?api_key=${this.apiKey}&language=${this.language}&with_genres=${this.action}&primary_release_year=${this.year}`)
  }


 
}
