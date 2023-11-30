import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { UserDTO } from '../../EasyComandas//models/user.dto';
import { AppState } from '../../app.reducers';
import { HeaderService } from '../header/header.service';
import { LocalStorageService } from '../services/local-storage.service';
import { login } from './actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginUser: UserDTO;
  password: FormControl;
  usuario: FormControl;
  userForm: FormGroup;

  constructor(
    private HeaderService: HeaderService,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.loginUser = new UserDTO('', '', '', '', 0, '');
    this.password = new FormControl(this.loginUser.password, [
      Validators.required,
    ]);
    this.usuario = new FormControl(this.loginUser.usuario, [
      Validators.required,
    ]);
    this.userForm = this.formBuilder.group({
      usuario: this.usuario,
      password: this.password,
    });
  }

  ngOnInit() {
    this.HeaderService.titulo('Inicio');
  }
  credencialesIncorrectas: boolean = false;
  ocultar: boolean = true;

  login(): void {
    this.credencialesIncorrectas = false;
    this.loginUser.usuario = this.usuario.value;
    this.loginUser.password = this.password.value;
    const state = this.store.select('loginApp');
    this.store.dispatch(login({ credentials: this.loginUser }));

    state
      .pipe(
        map((authState) => {
          return authState;
        })
      )
      .subscribe((authState) => {
        if (authState.loaded) {
          this.localStorageService.login(authState.credentials.access_token);
          this.router.navigateByUrl('/mesas');
        } else if (authState.error) {
          this.credencialesIncorrectas = true;
        }
      });
  }
}
