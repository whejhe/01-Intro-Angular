import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { JuegosService } from 'src/app/servicios/juegos.service';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent implements OnInit {
  
  constructor(private _juegoService: JuegosService) { }
  @Input()juego!: Juego;
  @Output() notificaCambio:EventEmitter<string> = new EventEmitter();
  public favorito: boolean = false;
  ngOnInit(): void {
      
  }

  nuevaPagina(url:string){
    window.open(url, "_blank");
  }
  cambia(ev: any){
    console.log('this.favorito', this.favorito);
    this.notificaCambio.emit(this.juego.title);
    this._juegoService.eventoFavoritos.emit(this.juego);
  }

}
