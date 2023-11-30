import { Injectable } from '@angular/core';

const userStorage = 'TOKEN';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  set(arg0: string, user_id: any) {
    throw new Error('Method not implemented.');
  }
  login(token: any) {
    localStorage.setItem(userStorage, token);
  }

  logOut() {
    localStorage.removeItem(userStorage);
  }

  getToken() {
    if (
      localStorage.getItem(userStorage) == '' ||
      localStorage.getItem(userStorage) == null ||
      JSON.parse(<string>localStorage.getItem(userStorage)) == null
    ) {
      return null;
    } else {
      return JSON.parse(<string>localStorage.getItem(userStorage)).token;
    }
  }
}
