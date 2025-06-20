import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onama } from './onama';

describe('Onama', () => {
  let component: Onama;
  let fixture: ComponentFixture<Onama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onama);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
