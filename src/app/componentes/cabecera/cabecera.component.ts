import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() titulo: string = '';

  public elementosMenu:any[]=[
    {
      ruta:'/inicio',
      nombre:'Inicio',
      activo:false
    },
    {
      ruta:'/info',
      nombre:'Info',
      activo:false
    },
    {
      ruta:'/buscar',
      nombre:'Buscar',
      activo:false
    },
    {
      ruta:'/galeria',
      nombre:'Galeria',
      activo:false
    }
  ];
  constructor() { }

  ngOnInit(): void {
      this.elementosMenu.forEach(element=>element.activo=element.nombre==this.titulo);
  }
}
