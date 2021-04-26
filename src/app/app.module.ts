import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheComponent } from './fiche/fiche.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FicheModule } from './fiche/fiche.module';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FicheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
