import { Action, createReducer, on } from '@ngrx/store';
import * as SesionActions from './sesion.actions';

export const sesionFeatureKey = 'sesion';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(SesionActions.loadSesions, state => state),
  on(SesionActions.loadSesionsSuccess, (state, action) => state),
  on(SesionActions.loadSesionsFailure, (state, action) => state),

);
