import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-horror-movies',
  templateUrl: './horror-movies.component.html',
  styles: [
    `
      .size{
        width: 45%;
        margin-left: 25%
      }

      mat-card{
        margin: 25px;
      }

      .title-background{
        background-color: rgb(41, 37, 37);
        width: 18%;
        color: #ffc107;
        padding-left: 25px;
      }

      a{
        color: #ffff;
        text-decoration: none;
      }


    `
  ]
})
export class HorrorMoviesComponent implements OnInit {

  horrorMovies: any = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.getMovies(this.horrorMovies)

  }

  getMovies(horror: number): void{
    this.moviesService.getMovieHorror(horror)
    .subscribe(data => {
      this.horrorMovies = data.results;
    })
  }

}
