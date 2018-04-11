import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PlayersListComponent } from './components/players-list.component';

import { PlayersRoutingModule } from './players-routing.module';

import { PlayersService, PlayersUrlService } from './services';
import { ComposeMessageComponent } from './components/compose-message.component';

@NgModule({
    imports: [
      CommonModule,
      PlayersRoutingModule
    ],
    declarations: [
      AllStarComponent,
      PlayersListComponent,
      PlayerDetailComponent,
      ComposeMessageComponent
    ],
    providers: [ PlayersService, PlayersUrlService ]
  })
  export class PlayersModule {}
