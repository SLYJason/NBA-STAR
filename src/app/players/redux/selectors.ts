import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State } from './state';

const rootSelector = createFeatureSelector<State>('players');
