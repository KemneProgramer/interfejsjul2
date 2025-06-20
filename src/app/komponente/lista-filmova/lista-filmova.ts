import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modeli/film.model';
import { sviFilmovi } from '../filmovi';
@Component({
  selector: 'app-lista-filmova',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-filmova.html',
  styleUrls: ['./lista-filmova.scss']
})
export class ListaFilmova {
  filmovi = sviFilmovi;

  getProsecnaOcena(film: Film): number {
    if (!film.recenzije || film.recenzije.length === 0) return 0;
    const suma = film.recenzije.reduce((acc, r) => acc + r.ocena, 0);
    return suma / film.recenzije.length;
  }
}



