import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  public eventoFavoritos: EventEmitter<Juego> = new EventEmitter();
  constructor(private _http: HttpClient) { }

  getJuegos() {
    return new Promise<Juego[]>((resolve, reject) => {
      let url: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
      let cabeceras = {
        'X-RapidAPI-Key': '983f5f83e4msh4b6f8fee33f0fc5p1608d1jsn7db9f60fbdf1',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
      this._http.get<Juego[]>(url,{ headers: cabeceras}).subscribe({
        next: (datos) => resolve(datos),
        error: (err) => {
          reject(err.message);
        }
      });
    });
  }
}