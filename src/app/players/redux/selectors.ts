import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './state';

const rootSelector = createFeatureSelector<State>('players');

const AllPlayers = (state: State) => state.players;
const CurrentPlayer = (state: State) => state.currentPlayer;


export const PlayersSelectors = {
  getAllPlayers: createSelector(rootSelector, AllPlayers),
  getCurrentPlayer: createSelector(rootSelector, CurrentPlayer)
}

