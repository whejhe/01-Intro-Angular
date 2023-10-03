import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public elementosMenu:any[]=[
    {
      ruta:'Inicio',
      nombre:'Inicio'
    },
    {
      ruta:'Info',
      nombre:'Info'
    },
    {
      ruta:'Buscar',
      nombre:'Buscar'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
