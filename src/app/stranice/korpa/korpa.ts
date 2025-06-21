import { Component } from '@angular/core';
import { Film } from '../../modeli/film.model';
import { Korpa as KorpaService } from '../../services/korpa';
import { CommonModule } from '@angular/common';


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
}
