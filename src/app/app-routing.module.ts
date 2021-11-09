import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafClientesComponent } from './components/graf-clientes/graf-clientes.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';

const routes: Routes = [

  {path: '', component: TablaClientesComponent},
  {path: 'tablaClientes', component: TablaClientesComponent},
  {path: 'grafClientes', component: GrafClientesComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
