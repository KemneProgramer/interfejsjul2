import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Film } from '../../modeli/film.model';
import { sviFilmovi } from '../filmovi';

@Component({
  selector: 'app-lista-filmova',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-filmova.html',
  styleUrls: ['./lista-filmova.scss']
})
export class ListaFilmova {
  filmovi = sviFilmovi;

  pretraga: string = '';
  odabraniZanr: string = '';
  sviZanrovi: string[] = [];

  constructor() {
    this.sviZanrovi = [...new Set(this.filmovi.map(f => f.zanr))];
  }

  get filtriraniFilmovi(): Film[] {
    return this.filmovi.filter(f => {
      const imeMatch = f.naziv.toLowerCase().includes(this.pretraga.toLowerCase());
      const zanrMatch = this.odabraniZanr ? f.zanr === this.odabraniZanr : true;
      return imeMatch && zanrMatch;
    });
  }

  getProsecnaOcena(film: Film): number {
    if (!film.recenzije || film.recenzije.length === 0) return 0;
    const suma = film.recenzije.reduce((acc, r) => acc + r.ocena, 0);
    return suma / film.recenzije.length;
  }
}