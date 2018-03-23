import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersModule } from './players/players.module';
import { PlayersRoutingModule } from './players/players-routing.module';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule,
    BrowserAnimationsModule,
    AppRoutingModule  // this is root routing module, must be imported last.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
