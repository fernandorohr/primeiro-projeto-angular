import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaItinerarioComponent } from './tabela-itinerario.component';

describe('TabelaItinerarioComponent', () => {
  let component: TabelaItinerarioComponent;
  let fixture: ComponentFixture<TabelaItinerarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaItinerarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
