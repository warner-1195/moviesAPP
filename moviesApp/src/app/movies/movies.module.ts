import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesListComponent } from './movies-list/movies-list.component';

import { MaterialModule } from '../material/material.module';
import { ActionMoviesComponent } from './movies-list/action-movies/action-movies.component';
import { DramaMoviesComponent } from './movies-list/drama-movies/drama-movies.component';
import { HorrorMoviesComponent } from './movies-list/horror-movies/horror-movies.component';
import { ComediMoviesComponent } from './movies-list/comedi-movies/comedi-movies.component';
import { FlexModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MoviesListComponent,
    ActionMoviesComponent,
    DramaMoviesComponent,
    HorrorMoviesComponent,
    ComediMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    FlexModule
  ]
})
export class MoviesModule { }
