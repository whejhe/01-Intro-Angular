import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/servicios/juegos.service';
import { Juego } from '../../interfaces/juego';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor(private _juegosService: JuegosService) { }

  async ngOnInit() {
    try{
      let juegosObtenidos:Juego[] = await this._juegosService.getJuegos();
      //console.log('juegosObtenidos',juegosObtenidos);
      let juegosDisparos = juegosObtenidos.forEach(elemento=>{
        return elemento.genre == 'Shooter';
      })
      console.log('juegosDisparos',juegosDisparos);
    }catch(err){
      console.log('Error: ',err);
    }
  }


  public juegos = [
    {
      nombre: 'Juego 1',
      imagen: 'fifa.png'
    },
    {
      nombre: 'Juego 2',
      imagen: 'fifa.png'
    },
    {
      nombre: 'Juego 3',
      imagen: 'fifa.png'
    },
  ];

  getJuegosFalse(){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        let hayError = false;
        if(hayError){
          reject('Error en la peticion');
        }else{
          resolve(this.juegos);
        }
      }, 2000);      
    })

  }

}
