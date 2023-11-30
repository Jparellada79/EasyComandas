import { createReducer, on } from '@ngrx/store';
import { UserDTO } from '../../Models/user.dto';
import { login, loginFailure, loginSuccess } from '../actions/login.actions';

export interface AuthState {
  credentials: UserDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: AuthState = {
  credentials: {
    usuario: '',
    access_token: '',
    password: '',
    nombre:'',
    rol: 1,
    foto: '',
  },
  loading: false,
  loaded: false,
  error: null,
};

export const _authReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loading: true,
  })),
  on(loginSuccess, (state, { user_id, access_token, user_rol, user_photo,user_name }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    credentials: {
    usuario: user_id,
     access_token: access_token,
     password: state.credentials.password,
     nombre: user_name,
      rol: user_rol,
      foto:user_photo,
    },
  })),
  on(loginFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
