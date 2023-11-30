import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private tituloPagina = new BehaviorSubject<string>('Default Title');
  tituloPagina$ = this.tituloPagina.asObservable();

  titulo(title: string) {
    this.tituloPagina.next(title);
  }
}
