import { ActionReducerMap } from "@ngrx/store";
import * as reducersLogin from './EasyComandas/login///reducers'



export interface AppState {
    loginApp: reducersLogin.AuthState;
    
  }
  
  export const appReducers: ActionReducerMap<AppState> = {
    loginApp: reducersLogin.authReducer,
   
  };