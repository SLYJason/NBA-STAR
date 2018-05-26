import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../redux/state';
import { PlayersSelectors } from '../redux/selectors';
import * as Actions from '../redux/actions';

import {Observable} from 'rxjs/Observable';
import {Player} from '../models/player.model';

@Injectable()
export class PlayerStoreService {

  constructor(private store: Store<State>) { }

  loadAllPlayers(): void {
    this.store.dispatch(new Actions.LoadAllPlayers());
  }

  loadAllPlayersSuccess(players: Player[]): void {
    this.store.dispatch(new Actions.LoadAllPlayersSuccess(players));
  }

  getAllPlayers(): Observable<Player[]> {
    return this.store.select(PlayersSelectors.getAllPlayers);
  }
}
