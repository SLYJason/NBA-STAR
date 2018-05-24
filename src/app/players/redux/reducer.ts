import { initialState, State } from './state';
import * as PlayersActions from './actions';
import { Player } from '../models/player.model';


export const playersReducer = (state: State = initialState, action: PlayersActions.Actions): State => {
  switch (action.type) {
    case PlayersActions.LOAD_ALL_PLAYERS: return state;
    case PlayersActions.SELECT_CURRENT_PLAYER: return state.currentPlayer = null;
    default: return state;
  }
}
