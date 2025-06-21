import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Film } from '../../modeli/film.model';
import { sviFilmovi } from '../filmovi';
import { RezervacijeService } from '../../services/rezervacije-service';

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
  minimalnaOcena: number = 0;
  trajanjeFilter: string = ''; 

  sviZanrovi: string[] = [];
  ocene: number[] = [];

  constructor() {
    this.sviZanrovi = [...new Set(this.filmovi.map(f => f.zanr))];
    this.ocene = [];
    for (let o = 0.5; o <= 5; o += 0.5) {
      this.ocene.push(parseFloat(o.toFixed(1)));
    }
  }

  get filtriraniFilmovi(): Film[] {
    return this.filmovi.filter(f => {
      const imeMatch = f.naziv.toLowerCase().includes(this.pretraga.toLowerCase());
      const zanrMatch = this.odabraniZanr ? f.zanr === this.odabraniZanr : true;
      const ocenaMatch = this.getProsecnaOcena(f) >= this.minimalnaOcena;

      let trajanjeMatch = true;
      if (this.trajanjeFilter === 'kratko') {
        trajanjeMatch = f.trajanje < 120;
      } else if (this.trajanjeFilter === 'dugo') {
        trajanjeMatch = f.trajanje >= 120;
      }

      return imeMatch && zanrMatch && ocenaMatch && trajanjeMatch;
    });
  }

  getProsecnaOcena(film: Film): number {
    if (!film.recenzije || film.recenzije.length === 0) return 0;
    const suma = film.recenzije.reduce((acc, r) => acc + r.ocena, 0);
    return suma / film.recenzije.length;
  }

  rezervisiFilm(film: Film): void {
    RezervacijeService.printFilm(film);
  }
  
}