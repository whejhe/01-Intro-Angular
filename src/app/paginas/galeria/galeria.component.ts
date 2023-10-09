import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor() { }

  async ngOnInit() {
    try{
      let juegosObtenidos = await this.getJuegos();
      console.log('juegosObtenidos',juegosObtenidos);
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

  getJuegos(){
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
