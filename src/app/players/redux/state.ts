import { Player } from '../models/player.model';

export interface State {
  players: Player[];
  currentPlayer: Player;
}

export const initialState: State = {
  players: [],
  currentPlayer: null
};

