import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllStarComponent } from './components/all-star/all-star.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayersListComponent } from './components/player-list/players-list.component';
import { ComposeMessageComponent } from './components/compose-message.component';

const playersRoutes: Routes = [
    {
      path: 'all-star',
      component: AllStarComponent
    },
    {
      path: 'players-list',
      component: PlayersListComponent
    },
    {
      path: 'player/:id',
      component: PlayerDetailComponent
    },
    {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(
        playersRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class PlayersRoutingModule { }
