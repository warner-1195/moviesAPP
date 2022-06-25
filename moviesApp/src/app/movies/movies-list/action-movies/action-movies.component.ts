import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-action-movies',
  templateUrl: './action-movies.component.html',
  styles: [ 
    `
      a{
        text-decoration: none;
        color: #ffff;
      }

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
export class ActionMoviesComponent implements OnInit {

  actionMovies : any = [];

  constructor( private moviesService: MoviesService ) {}

  ngOnInit(): void {
    this.getMovies(this.actionMovies)
  }


  getMovies(action : number): void{
    this.moviesService.getMovieAction(action)
    .subscribe(data => {

      this.actionMovies = data.results;

      console.log(this.actionMovies[0])
    
    })
  }
  
}
