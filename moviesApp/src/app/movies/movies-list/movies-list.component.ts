import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from 'src/app/auth/interface/auth.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styles: [
    `
      .margin{
        margin-left: 5px;
      }

      .title{
        margin-left: 10%;
      }

      .title-background{
        background-color: rgb(41, 37, 37);
        width: 15%;
        color: #ffc107;
        padding-left: 25px;
      }

      span{
        color: #ffc107;
      }

      mat-sidenav{
        background-color: rgb(41, 37, 37) ;

      }

      .size{
        width: 45%;
        margin-left: 25%
      }

      mat-toolbar{
        background-color: #ffc107;
      }

      .position{
        margin-left: 85%;
      }
      
      .usernameposition{
        margin-left: 80%;
      }

      mat-sidenav-container{
        background-image: url(https://cinescopia.com/wp-content/uploads/2016/03/peliculas-1.jpg);
      }

      mat-card{
        margin: 25px;
      }
    `
  ]
})
export class MoviesListComponent implements OnInit {

  lastestMovies : any = [];

  get user(){
    return this.authService.user;
  }

  constructor( private moviesService : MoviesService,
               private router : Router,
               private authService : AuthService ) { }

  ngOnInit(): void {

    this.getMovies(this.lastestMovies)

  }


  getMovies(lastest : number ) : void {

    
    
  
    this.moviesService.getMovieAction(lastest)
      .subscribe(data => {
        this.lastestMovies = data.results;      
      })
  }

  logout(){
    this.router.navigate(['./auth/login']);
    this.authService.logout();
  }


}
