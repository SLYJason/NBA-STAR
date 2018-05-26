import { initialState, State } from './state';
import * as PlayersActions from './actions';
import { Player } from '../models/player.model';

import { updateObject } from '../../shared/redux/utils';



export const playersReducer = (state: State = initialState, action: PlayersActions.Actions): State => {
  switch (action.type) {
    case PlayersActions.LOAD_ALL_PLAYERS: return updateObject(state, action.payload);
    case PlayersActions.SELECT_CURRENT_PLAYER: return updateObject(state, action.payload);
    default: return state;
  }
}
