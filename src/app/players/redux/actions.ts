import { Action } from '@ngrx/store';
import { Player } from '../models/player.model';

export const LOAD_ALL_PLAYERS = '[players] load all players';
export const SELECT_CURRENT_PLAYER = '[players] select current player';

export class LoadAllPlayers implements Action {
  readonly type = LOAD_ALL_PLAYERS;
  constructor(public payload: Player[]) {}
}

export class SelectCurrentPlayer implements Action {
  readonly type =  SELECT_CURRENT_PLAYER;
  constructor(public payload: Player) {}
}

export type Actions =
  LoadAllPlayers |
  SelectCurrentPlayer;
