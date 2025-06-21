import { Component, OnInit } from '@angular/core';
import { Film } from '../../modeli/film.model';
import { sviFilmovi } from '../../komponente/filmovi';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.html',
  styleUrl: './pocetna.scss',
  standalone: true,
  imports: [NgIf]
})
export class Pocetna implements OnInit {
  randomFilm!: Film;
  topFilmovi: Film[] = [];
  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * sviFilmovi.length);
    this.randomFilm = sviFilmovi[randomIndex];
   


  }





  slike: string[] = [
  'assets/slike/maras.jpg',
  'assets/slike/kokice.png',
  'assets/slike/bioskop.jpg'
];
trenutnaSlika = 0;

sledeca() {
  this.trenutnaSlika = (this.trenutnaSlika + 1) % this.slike.length;
}

prethodna() {
  this.trenutnaSlika =
    (this.trenutnaSlika - 1 + this.slike.length) % this.slike.length;
}
}

