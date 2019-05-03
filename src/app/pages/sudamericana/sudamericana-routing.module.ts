import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SudamericanaComponent } from './sudamericana.component';
import { PaisComponent } from './pais/pais.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { PartidoComponent } from './partido/partido.component';

const routes: Routes = [{
  path: '',
  component: SudamericanaComponent,
  children: [{
    path: 'pais',
    component: PaisComponent,
  },{
    path: 'ciudad',
    component: CiudadComponent,
  },{
    path: 'equipo',
    component: EquipoComponent,
  },{
    path: 'tabla',
    component: TablaPosicionesComponent,
  },{
    path: 'partido',
    component: PartidoComponent,
  }]
  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SudamericanaRoutingModule { }
export const routedComponents = [
  PaisComponent,
  CiudadComponent,
  EquipoComponent,
  PartidoComponent,
  TablaPosicionesComponent,
  SudamericanaComponent
];