import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersListComponent } from './components/players-list.component';

import { PlayersService } from './service/players.service';


@NgModule({
  declarations: [
    AppComponent,
    AllStarComponent,
    PlayerDetailComponent,
    PageNotFoundComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
