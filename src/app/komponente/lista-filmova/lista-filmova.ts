import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modeli/film.model';
@Component({
  selector: 'app-lista-filmova',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-filmova.html',
  styleUrls: ['./lista-filmova.scss']
})
export class ListaFilmova {



  filmovi: Film[] = [
  {
    id: 1,
    naziv: 'Juzni vetar',
    autor: 'Dragan Bjelogrlic',
    opis: 'Maras roka bugare.',
    zanr: 'Akcija',
    trajanje: 148,
    glumci: ['Milos Bikovic', 'Miodrag Radonjic'],
    datumIzlaska: '2010-07-16',
    projekcije: [
      { datum: '2025-06-21', vreme: '20:00', status: 'rezervisano' },
      { datum: '2025-06-22', vreme: '18:00', status: 'gledano', ocena: 5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Ana', komentar: 'Omiljeni deo kad Maras ubije 15 ljudi!', ocena: 5 },
      { korisnik: 'Marko', komentar: 'Ja sam bukvalno Baca', ocena: 4 }
    ],
    slika: 'assets/slike/maras.jpg'
  },
  
  {
    id: 2,
    naziv: 'Juzni vetar 2',
    autor: 'Dragan Bjelogrlic',
    opis: 'Maras opet roka bugare.',
    zanr: 'Akcija',
    trajanje: 158,
    glumci: ['Milos Bikovic', 'Miodrag Radonjic'],
    datumIzlaska: '2013-07-16',
    projekcije: [
      { datum: '2025-06-21', vreme: '20:00', status: 'rezervisano' },
      { datum: '2025-06-22', vreme: '18:00', status: 'gledano', ocena: 5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Ana', komentar: 'Omiljeni deo kad Maras ubije 15 ljudi!', ocena: 5 },
      { korisnik: 'Marko', komentar: 'Ja sam bukvalno Baca', ocena: 4 }
    ],
    slika: 'assets/slike/maras.jpg'
  },
  {
    id: 3,
    naziv: 'Munje',
    autor: 'Radivoje Andric',
    opis: 'Samo jedna obična urbana beogradska noc – dva prijatelja pokušavaju da povrate novac od školskog druga kojeg su maltretirali dok su bili deca.',
    zanr: 'Komedija',
    trajanje: 90,
    glumci: ['Sergej Trifunovic, Maja Mandzuka, Boris Milivojevic'],
    datumIzlaska: '2001-03-21',
    projekcije: [
      { datum: '2025-06-21', vreme: '21:00', status: 'rezervisano' },
      { datum: '2025-06-22', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 500,
    recenzije: [
      { korisnik: 'Milan', komentar: 'Omiljeni deo je kucna zurka', ocena: 4 },
      { korisnik: 'Marko', komentar: 'Beremo jabuke', ocena: 5 }
    ],
    slika: 'assets/slike/munje.png'
  },


];


getProsecnaOcena(film: Film): number {
    if (!film.recenzije || film.recenzije.length === 0) return 0;
    const suma = film.recenzije.reduce((acc, rec) => acc + rec.ocena, 0);
    return suma / film.recenzije.length;
  }
}



