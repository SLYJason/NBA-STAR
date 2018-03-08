import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllStarComponent } from './components/all-star.component';
import { PlayerDetailComponent } from './components/player-detail.component';
import { PlayersListComponent } from './components/players-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
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
        path: '',
        redirectTo: '/players-list',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          // enableTracing: true, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule { }