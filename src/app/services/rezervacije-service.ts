import { Injectable } from '@angular/core';
import { Film } from '../modeli/film.model';

@Injectable({
  providedIn: 'root'
})
export class RezervacijeService {
  static rezervacije: Film[] = [];

  static printFilm(film: Film): void {
    const postoji = this.rezervacije.some(f => f.naziv === film.naziv && f.datumIzlaska === film.datumIzlaska);

    if(!postoji){
      this.rezervacije.push(film);
      sessionStorage.setItem('rezervacije', JSON.stringify(this.rezervacije));
    }
    else{
      console.log("postoji film sa istim nazivom i datumom izlaska");
    }
  }

  static getRezervacije(): Film[] {
    const data = sessionStorage.getItem('rezervacije');
    const rezervacije: Film[] = data ? JSON.parse(data) : [];
    return rezervacije;
  }

  static removeRezervacija(index: number): void {
    this.rezervacije.splice(index, 1);
    sessionStorage.setItem('rezervacije', JSON.stringify(this.rezervacije));
  }

  constructor() { }
}
