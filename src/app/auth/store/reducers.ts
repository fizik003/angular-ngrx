import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from './actions/getCurrentUser.action';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from './actions/login.action';
import { AuthStateInterface } from './../types/authState.interface';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from './actions/register.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  isLoading: false,
  validationErrors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: true,
        validationErrors: null,
      };
    }
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => {
      return {
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
        validationErrors: null,
      };
    }
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => {
      console.log(action.errors);
      return {
        ...state,
        validationErrors: action.errors,
      };
    }
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
