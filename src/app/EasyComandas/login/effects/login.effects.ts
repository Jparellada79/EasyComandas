import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailure, loginSuccess } from '../actions';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {LoginService} from '../login.service'

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private LoginService: LoginService) {}
 login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ credentials }) =>
          this.LoginService.login(credentials.usuario,credentials.password).pipe(
           map((authdto) => loginSuccess({ user_id:credentials.usuario,access_token:authdto.token,
                                          user_rol:authdto.rol, user_photo:authdto.foto,user_name:authdto.nombre })),
          catchError((err) => of(loginFailure({ payload: err })))
        )
      )
    )
    
  );
  
}
