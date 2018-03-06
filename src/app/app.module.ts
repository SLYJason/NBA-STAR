import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersListComponent } from './components/players-list.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
