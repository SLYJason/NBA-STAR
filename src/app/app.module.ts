import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PlayersModule } from './players/players.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { LoginRoutingModule } from './login-routing.module';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

const metaReducers = [];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlayersModule,
    AdminModule,
    SharedModule,
    BrowserAnimationsModule,
    LoginRoutingModule,
    StoreModule.forRoot({}, {metaReducers}),
    AppRoutingModule  // this is root routing module, must be imported last.
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
