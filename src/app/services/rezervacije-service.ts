import { Injectable } from '@angular/core';
import { Film } from '../modeli/film.model'; // adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class RezervacijeService {
  static rezervacije: Film[] = [];

  static printFilm(film: Film): void {
    const postoji = this.rezervacije.some(f => f.naziv === film.naziv && f.datumIzlaska === film.datumIzlaska);

    if(!postoji){
      this.rezervacije.push(film);
    }
    else{
      console.log("postoji film sa istim nazivom i datumom izlaska");
    }
  }

  constructor() { }
}
