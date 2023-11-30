import { Component } from '@angular/core';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  tituloPagina: string = 'Default Title';

  constructor(private HeaderService: HeaderService) {}

  ngOnInit() {
    this.HeaderService.tituloPagina$.subscribe((x) => {
      this.tituloPagina = x;
    });
  }
}
