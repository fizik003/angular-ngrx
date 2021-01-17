import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from './../actions/getCurrentUser.action';
import { HttpErrorResponse } from '@angular/common/http';
import { CurentUserInterface } from './../../../shared/types/currentUser.interface';
import { switchMap, map, catchError } from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUsern$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          console.log('nety tokena');

          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurentUserInterface) => {
            console.log(currentUser);
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log('error');
            return of(getCurrentUserFailureAction());
          })
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
