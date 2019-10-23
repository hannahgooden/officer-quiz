import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'results', 
    component: ResultsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsComponent,
    ResultsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
