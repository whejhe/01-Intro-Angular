import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { JuegoCardComponent } from './juego-card/juego-card.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CabeceraComponent,
    FooterComponent,
    JuegoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    CabeceraComponent,
    FooterComponent,
    JuegoCardComponent
  ]
})
export class ComponentesModule { }
