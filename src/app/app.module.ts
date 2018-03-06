import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { NotFoundPageComponent } from './components/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AllStarComponent,
    PlayerDetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
