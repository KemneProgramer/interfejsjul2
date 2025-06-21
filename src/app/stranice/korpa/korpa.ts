import { Component } from '@angular/core';
import { Film } from '../../modeli/film.model';
import { Korpa as KorpaService } from '../../services/korpa';
import { RezervacijeService } from '../../services/rezervacije-service';
import { CommonModule } from '@angular/common';
import { RezervacijeService } from '../../services/rezervacije-service';


@Component({
  selector: 'app-korpa',
  imports: [CommonModule],
  templateUrl: './korpa.html',
  styleUrl: './korpa.scss'
})
export class Korpa {

  getKorpa(): Film[] {
    return KorpaService.getKorpa();
  }

  removeIzKorpe(index: number): void {
    KorpaService.removeIzKorpe(index);
  }

  ukupnaCena(): number {
    let korpa = this.getKorpa();
    let ukupnaCena = 0;
    korpa.forEach((film: Film) => {
      ukupnaCena += film.cena;
    });
    console.log('Ukupna cena:', ukupnaCena);
    return ukupnaCena;
  }

  kupiSve(): void {
    let korpa = this.getKorpa();
    console.log('Kupi sve:', korpa);
    for(let i = korpa.length - 1; i >= 0; i--) {
      console.log('Dodajem rezervaciju za film:', korpa[i]);
      RezervacijeService.dodajRezervaciju(korpa[i]);
      KorpaService.removeIzKorpe(i)
    }
  }


  rezervisiFilm(film: Film, index: number): void {
    RezervacijeService.dodajRezervaciju(film);
    this.removeIzKorpe(index);
  }
}
