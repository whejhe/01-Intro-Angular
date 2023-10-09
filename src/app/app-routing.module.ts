import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { InfoComponent } from './paginas/info/info.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';

const rutas:Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'buscar',
    component:BuscarComponent
  },
  {
    path:'info',
    component:InfoComponent
  },
  {
    path:'galeria',
    component:GaleriaComponent
  },
  {
    path:'**',
    redirectTo:'inicio'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
