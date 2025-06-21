import { Injectable } from '@angular/core';
import { Film } from '../modeli/film.model';

@Injectable({
  providedIn: 'root'
})
export class Korpa {

  static korpa: Film[] = [];

  static getKorpa(): Film[] {
    const data = sessionStorage.getItem('korpa');
    if (data) {
      this.korpa = JSON.parse(data);
    } else {
      this.korpa = [];
    }
    return this.korpa;
  }

  static dodajUKorpu(film: Film): void {
    const postoji = this.korpa.some(f => f.naziv === film.naziv && f.datumIzlaska === film.datumIzlaska);

    if (!postoji) {
      this.korpa.push(film);
      sessionStorage.setItem('korpa', JSON.stringify(this.korpa));
    } else {
      console.log('Film je već u korpi.');
    }
  }

  static removeIzKorpe(index: number): void {
    this.korpa = this.getKorpa();

    if (index >= 0 && index < this.korpa.length) {
      this.korpa.splice(index, 1);
      sessionStorage.setItem('korpa', JSON.stringify(this.korpa));
    }
  }


  constructor() { }
}
