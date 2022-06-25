import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionMoviesComponent } from './action-movies/action-movies.component';
import { ComediMoviesComponent } from './comedi-movies/comedi-movies.component';
import { DramaMoviesComponent } from './drama-movies/drama-movies.component';
import { HorrorMoviesComponent } from './horror-movies/horror-movies.component';

const routes: Routes = [
  {path: 'action-movies', component: ActionMoviesComponent},
  {path: 'horror-movies', component: HorrorMoviesComponent},
  {path: 'drama-movies', component: DramaMoviesComponent},
  {path: 'comedi-movies', component: ComediMoviesComponent},
  {path: '**', redirectTo: 'action-movies'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListRoutingModule { }
