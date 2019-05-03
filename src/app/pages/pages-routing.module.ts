import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SudamericanaComponent } from './sudamericana/sudamericana.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'sudamericana',
    loadChildren: './sudamericana/sudamericana.module#SudamericanaModule',
  }]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
