import { CurentUserInterface } from './../../../shared/types/currentUser.interface';
import { ActiontTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const getCurrentUserAction = createAction(ActiontTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActiontTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActiontTypes.GET_CURRENT_USER_FAILURE
);
