import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListRoutingModule } from './movies-list-routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MaterialModule
  ]
})
export class MoviesListModule { }
