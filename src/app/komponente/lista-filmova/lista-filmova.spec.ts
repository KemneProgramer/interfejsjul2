import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFilmova } from '../../komponente/lista-filmova/lista-filmova';

describe('ListaFilmova', () => {
  let component: ListaFilmova;
  let fixture: ComponentFixture<ListaFilmova>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFilmova]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFilmova);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
