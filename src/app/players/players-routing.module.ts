import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PlayersListComponent } from './components/players-list.component';

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
    }
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