import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { CurentUserInterface } from './../../../shared/types/currentUser.interface';
import { LoginRequestInterface } from './../../types/loginRequest.interface';
import { ActiontTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  ActiontTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActiontTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActiontTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
