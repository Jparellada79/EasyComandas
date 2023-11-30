import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ComandaComponent } from './EasyComandas/comanda/comanda.component';
import { FooterrComponent } from './EasyComandas/footer/footer.component';
import { HeaderComponent } from './EasyComandas/header/header.component';
import { LoginComponent } from './EasyComandas/login/login.component';
import { MesasComponent } from './EasyComandas/mesas/mesas.component';
import { VentaComponent } from './EasyComandas/venta/venta.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments/environment.prod';
import { InterceptorService } from './EasyComandas/services/interceptor.service';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MesasComponent,
    VentaComponent,
    ComandaComponent,
    LoginComponent,
    FooterrComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
      BrowserModule,
    AppRoutingModule,  
    HttpClientModule,  
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
      { provide: LOCALE_ID, useValue: 'es-ES' },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
