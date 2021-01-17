import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { CurentUserInterface } from './../../../shared/types/currentUser.interface';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { ActiontTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
  ActiontTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActiontTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActiontTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
