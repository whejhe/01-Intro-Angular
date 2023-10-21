import { Component, OnInit, Input } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';

@Component({
  selector: 'app-juego-card',
  templateUrl: './juego-card.component.html',
  styleUrls: ['./juego-card.component.css']
})
export class JuegoCardComponent implements OnInit {
  
  constructor() { }
  @Input()juego!: Juego;
  ngOnInit(): void {
      
  }

  nuevaPagina(url:string){
    window.open(url, "_blank");
  }

}
