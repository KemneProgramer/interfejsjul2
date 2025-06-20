export interface Projekcija {
  datum: string;   
  vreme: string;    
  status: 'rezervisano' | 'gledano' | 'otkazano';
  ocena?: number;  
}

export interface Film {
  id: number;
  naziv: string;
  autor: string;
  opis: string;
  zanr: string;
  trajanje: number;      
  glumci: string[];
  datumIzlaska: string;   
  projekcije: Projekcija[];
  cena: number;
  recenzije: {
    korisnik: string;
    komentar: string;
    ocena: number;
  }[];
  slika: string;
}