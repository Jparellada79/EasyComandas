import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { UserDTO } from '../../models/user.dto';

export const login = createAction('[Login] Login',  props<{ credentials:UserDTO }>());
export const loginSuccess = createAction( '[Login] Login Success',  props<{ user_id: string; access_token: string, user_rol:number, user_photo:string,user_name:string }>());
export const loginFailure = createAction('[Login] Login Failure', props<{ payload: HttpErrorResponse }>());
export const logout = createAction('[Login] Logout');
