import { HttpErrorResponse } from '@angular/common/http';
import { CurentUserInterface } from './../../../shared/types/currentUser.interface';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from './../actions/login.action';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { AuthService } from './../../services/auth.service';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          console.log('succ');
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
