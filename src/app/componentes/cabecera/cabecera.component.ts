import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public elementosMenu:any[]=[
    {
      ruta:'inicio',
      nombre:'Inicio'
    },
    {
      ruta:'info',
      nombre:'Info'
    },
    {
      ruta:'buscar',
      nombre:'Buscar'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
