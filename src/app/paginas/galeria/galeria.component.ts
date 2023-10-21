import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { Juego } from '../../interfaces/juego';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  campo: string = 'title';

  constructor(private _juegosService: JuegosService) { }

  public cadenaBusqueda: string = '';

  juegos: Juego[] = [];

  async ngOnInit() {
    try {
      this.juegos = await this._juegosService.getJuegos();
      console.log('juegosObtenidos', this.juegos);
    } catch (err) {
      console.log('Error: ', err);
    }
  }
  cambia(ev: any){
    console.log(this.cadenaBusqueda);
  }

}
