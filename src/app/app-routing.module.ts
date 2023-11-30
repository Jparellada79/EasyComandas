import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './EasyComandas/comanda/comanda.component';
import { FooterrComponent } from './EasyComandas/footer/footer.component';
import { LoginComponent } from './EasyComandas/login/login.component';
import { MesasComponent } from './EasyComandas/mesas/mesas.component';
import { VentaComponent } from './EasyComandas/venta/venta.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mesas', component: MesasComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'comanda', component: ComandaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nave', component: FooterrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
