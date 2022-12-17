import { createAction, props } from '@ngrx/store';

export const loadSesions = createAction(
  '[Sesion] Load Sesions'
);

export const loadSesionsSuccess = createAction(
  '[Sesion] Load Sesions Success',
  props<{ data: any }>()
);

export const loadSesionsFailure = createAction(
  '[Sesion] Load Sesions Failure',
  props<{ error: any }>()
);
