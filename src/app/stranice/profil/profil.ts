import { Component } from '@angular/core';
import { RezervacijeService } from '../../services/rezervacije-service';
import { Film } from '../../modeli/film.model';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.scss'
})
export class Profil {
  constructor(){
    console.log('Rezervacije u profilu:', RezervacijeService.getRezervacije());
  }

  getRezervacije(): Film[] {
    return RezervacijeService.getRezervacije();
  }

  removeRezervacija(index: number): void {
    RezervacijeService.removeRezervacija(index);
    console.log('Rezervacija uklonjena:', index);
  }
}
