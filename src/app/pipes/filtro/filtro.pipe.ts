import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], cadena: string, campo: string): any[] {
    if(value==null || value==undefined || value.length==0){
      return[];
    }
    return value.filter((elemento:any)=>{
      return elemento[campo].toLowerCase().includes(cadena.toLowerCase());
    });
  }

}
