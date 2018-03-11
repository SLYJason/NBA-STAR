import { NgModule } from '@angular/core';

import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PlayersListComponent } from './components/players-list.component';

import { PlayersRoutingModule } from './players-routing.module';

import { PlayersService } from './service/players.service';

@NgModule({
    imports: [
      PlayersRoutingModule
    ],
    declarations: [
      AllStarComponent,
      PlayersListComponent,
      PlayerDetailComponent
    ],
    providers: [ PlayersService ]
  })
  export class PlayersModule {}