import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-comedi-movies',
  templateUrl: './comedi-movies.component.html',
  styles: [
    `
      .size{
        width: 45%;
        margin-left: 25%
      }

      .title-background{
        background-color: rgb(41, 37, 37);
        width: 18%;
        color: #ffc107;
        padding-left: 25px;
      }

      mat-card{
        margin: 25px;
      }

      a{
        color: #ffff;
        text-decoration: none;
      }

    `
  ]
})
export class ComediMoviesComponent implements OnInit {
  comedyMovies : any = [];

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.getMovies(this.comedyMovies)
  }

  getMovies(comedy : number): void{
    this.moviesService.getMovieComedy(comedy)
    .subscribe(data => {

      this.comedyMovies = data.results;

      console.log(this.comedyMovies[0])
    
    })
  }
}
