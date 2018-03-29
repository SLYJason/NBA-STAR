import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlayersModule } from './players/players.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './auth.guard';

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
    AdminModule,
    BrowserAnimationsModule,
    AppRoutingModule  // this is root routing module, must be imported last.
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
