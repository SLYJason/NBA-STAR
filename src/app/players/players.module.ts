import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AllStarComponent } from './components/all-star/all-star.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayersListComponent } from './components/player-list/players-list.component';

import { PlayersRoutingModule } from './players-routing.module';

import { PlayersService, PlayersUrlService, PlayerStoreService } from './services';
import { ComposeMessageComponent } from './components/compose-message.component';
import { playersReducers} from './redux/reducer';

export const playersReducerToken = new InjectionToken<ActionReducer<any>>('Players Reducers');

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      StoreModule.forFeature('players', playersReducerToken),
      PlayersRoutingModule
    ],
    declarations: [
      AllStarComponent,
      PlayersListComponent,
      PlayerDetailComponent,
      ComposeMessageComponent
    ],
    providers: [
      { provide: playersReducerToken, useFactory: playersReducers},
      PlayersService,
      PlayersUrlService,
      PlayerStoreService
    ]
  })
  export class PlayersModule {}
