import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path: 'movies-list', component: MoviesListComponent},
  {path: '**', redirectTo: 'movie-list'},
  {
    path: 'movies-list',
    loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
