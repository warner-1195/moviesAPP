import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';





@NgModule({
  declarations: [

  ],imports: [
    CommonModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
