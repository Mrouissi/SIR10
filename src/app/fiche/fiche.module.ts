import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { FicheService } from './fiche.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule
  ],
  providers:[FicheService]
})
export class FicheModule { }
