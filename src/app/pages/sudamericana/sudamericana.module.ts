import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SudamericanaRoutingModule } from './sudamericana-routing.module';
import { PaisComponent } from './pais/pais.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { EquipoComponent } from './equipo/equipo.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { PartidoComponent } from './partido/partido.component';
import { SudamericanaComponent } from './sudamericana.component';
import { Ng2SmartTableModule } from 'ng2-smart-table/ng2-smart-table.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [PaisComponent, CiudadComponent, EquipoComponent, TablaPosicionesComponent, PartidoComponent, SudamericanaComponent],
  imports: [
    CommonModule,
    SudamericanaRoutingModule,
    Ng2SmartTableModule,
    ThemeModule
  ]
})
export class SudamericanaModule { }
