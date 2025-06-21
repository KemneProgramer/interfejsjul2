import { Film } from '../modeli/film.model';

export const sviFilmovi: Film[] = [
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
    trajanje: 148,
    glumci: ['Milos Bikovic', 'Miodrag Radonjic'],
    datumIzlaska: '2010-07-16',
    projekcije: [
      { datum: '2025-06-21', vreme: '20:00', status: 'rezervisano' },
      { datum: '2025-06-22', vreme: '18:00', status: 'gledano', ocena: 5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Ana', komentar: 'Omiljeni deo kad Maras opet ubije 15 ljudi!', ocena: 5 },
      { korisnik: 'Marko', komentar: 'Ja sam opet bukvalno Baca', ocena: 4 }
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

{
    id: 4,
    naziv: 'Profesionalac',
    autor: 'Dusan Kovacevic',
    opis: 'Nakon raspada jugoslovenske vlade, bivši tajni agent, sada taksista, ulazi u kancelariju bivšeg univerzitetskog profesora, sada direktora firme.',
    zanr: 'Drama',
    trajanje: 104,
    glumci: ['Bora Todorovic, Branislav Lecic, Natasa Ninkovic'],
    datumIzlaska: '2003-10-16',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 500,
    recenzije: [
      { korisnik: 'Stefan', komentar: 'Jednostavno sam uzivao u ovom filmu! Nije bilo nijednog dosadnog trenutka. Radnja je bila vrlo svezа, interesantna i originalna.', ocena: 5 },
      { korisnik: 'Milos', komentar: 'Ovaj film ima toliko emocija. Zivot glavnog junaka prolazimo kroz ceo film. Njegov odnos sa ocem i majkom — te scene me rasplace svaki put. Tu je i bivsi policajac, cija je cerka bila sa glavnim junakom.', ocena: 4.5 }
    ],
    slika: 'assets/slike/profesionalac.jpg'
  },
{
    id: 5,
    naziv: 'Lajanje na zvezde',
    autor: 'Zdravko Sotra',
    opis: 'Komedija o profesorima i ucenicima u srednjoj skoli u malom provincijskom gradu. Mihailo pokusava da osvoji srce devojke za kojom trci i njegov brat.',
    zanr: 'Romansa',
    trajanje: 95,
    glumci: ['Dragan Micanovic, Natasa Tapuskovic, Nikola Simic'],
    datumIzlaska: '1998-6-1',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 700,
    recenzije: [
      { korisnik: 'Milica', komentar: 'Ovo je izuzetno zabavan film o tinejdzerima i njihovim profesorima, sa toliko sala i smesnih situacija da verovatno necete prestati da se smejete tokom celog filma.', ocena: 5 },
      { korisnik: 'Aleksa', komentar: 'Kroz spontana gestove i neprestanu upornost, Mihajlo, maturant, uz veliki trud uspeva da privuce paznju Danice, devojke svojih snova.', ocena: 3 }
    ],
    slika: 'assets/slike/zvezde.jpg'
  },
{
    id: 6,
    naziv: 'Cetvrti covek',
    autor: 'Dejan Zecevic',
    opis: 'Muskarac se budi iz kome koja je trajala dva meseca, sa potpunim gubitkom pamcenja, i krece u potragu za istinom o svom identitetu.',
    zanr: 'Triler',
    trajanje: 95,
    glumci: ['Nikola Kojo, Dragan Petrovic Pele, Bogdan Diklic'],
    datumIzlaska: '2007-11-1',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Marko', komentar: 'Kraj je jedan od onih posle kojih kazes "au jebote" onako u soku. Brutalan je.', ocena: 5 },
      { korisnik: 'Stefan', komentar: ' To je prica u kojoj ce uzivati svaki ljubitelj trilera sirom sveta, samo nemoj da ocekujes da ces zavrsiti film sa sjajnim raspolozenjem. Ovaj bol deluje stvarno.', ocena: 5 }
    ],
    slika: 'assets/slike/covek.jpg'
  }, 
{
    id: 7,
    naziv: 'Rane',
    autor: 'Srdjan Dragojevic',
    opis: 'Ovaj film prati dvojicu beogradskih mladića na njihovom usponu do statusa gangsterskih legendi u raspadajućem društvu.',
    zanr: 'Krimi drama',
    trajanje: 103,
    glumci: ['Dusan Pekic, Milan Maric, Dragan Bjelogrlic'],
    datumIzlaska: '1998-05-15',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Filip', komentar: 'Brutalan film sa teskom porukom', ocena: 5 },
      { korisnik: 'Nemanja', komentar: 'Definitivno film koji cu ponovo gledati', ocena: 5 }
    ],
    slika: 'assets/slike/rane.jpg'
  },

{
    id: 8,
    naziv: 'Lepa sela lepo gore',
    autor: 'Srdjan Dragojevic',
    opis: 'Tokom rata u Bosni, dva prijatelja iz detinjstva na kraju postaju neprijatelji, jer ih tragicne i razarajuce okolnosti rata stavljaju na suprotne strane i otkrivaju najstrasniju i najokrutniju stranu ljudske prirode.',
    zanr: 'Drama',
    trajanje: 115,
    glumci: ['Dragan Bjelogrlic, Nikola Kojo, Dragan Maksimovic'],
    datumIzlaska: '1997-11-6',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 450,
    recenzije: [
      { korisnik: 'Ivan', komentar: 'Prava slika rata', ocena: 4 },
      { korisnik: 'Luka', komentar: 'Dobro napisano, dobro odigrano, dobro režirano.', ocena: 5 }
    ],
    slika: 'assets/slike/sela.jpg'
  },

{
    id: 9,
    naziv: 'Mrtav ladan',
    autor: 'Milorad Milinkovic',
    opis: 'Dva brata, Lemi i Kiza, nakon što su potrošili sav novac, pokušavaju da prevezu pokojnog dedu iz Beograda u Vršac po najnižoj ceni, ali on usput nestaje.',
    zanr: 'Drama',
    trajanje: 90,
    glumci: ['Nikola Djuricko, Sonja Kolaric, Tara Manic'],
    datumIzlaska: '2002-08-24',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 500,
    recenzije: [
      { korisnik: 'Lazar', komentar: 'Ovde je komedija prikazana na pomalo crn nacin, sto publika treba da razume, ali film uopsteno ima odlicnu temu i pricu.', ocena: 4.5 },
      { korisnik: 'Nikola', komentar: 'Jedan od najboljih Srpskih filmova', ocena: 5 }
    ],
    slika: 'assets/slike/ladan.jpg'
  }, 

{
    id: 10,
    naziv: 'Kad porastem bicu kengur',
    autor: 'Radivoje Andric',
    opis: 'Tokom jedne neobicne noci, zivoti vise povezanih ljudi se menjaju dok brzo prolaze kroz ljubav, razocaranje, radost, pohlepu i kajanje.',
    zanr: 'Komedija',
    trajanje: 92,
    glumci: ['Sergej Trifunovic, Marija Karan, Nebojsa Glogovac'],
    datumIzlaska: '2004-03-25',
    projekcije: [
      { datum: '2025-06-24', vreme: '19:00', status: 'rezervisano' },
      { datum: '2025-06-24', vreme: '22:30', status: 'gledano', ocena: 4.5 }
    ],
    cena: 500,
    recenzije: [
      { korisnik: 'Milos', komentar: 'Ovo je prvi i jedini savremeni srpski film koji je apsolutno savrsen', ocena: 5 },
      { korisnik: 'David', komentar: 'Na duhovit nacin prikazuje nase zajednicko osecanje beznade, podsmevajuci se nama samima.', ocena: 4 }
    ],
    slika: 'assets/slike/kengur.jpg'
  },

];