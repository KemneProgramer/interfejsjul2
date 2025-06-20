import { Routes } from '@angular/router';
import { ListaFilmova } from './komponente/lista-filmova/lista-filmova';
import { Pocetna } from './stranice/pocetna/pocetna';
import { Profil } from './stranice/profil/profil';
import { Korpa } from './stranice/korpa/korpa';
import { Onama } from './stranice/onama/onama';

export const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: Pocetna },
  { path: 'filmovi', component: ListaFilmova },
  { path: 'profil', component: Profil },
  { path: 'korpa', component: Korpa },
  { path: 'onama', component: Onama }
];