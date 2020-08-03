import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioLotacaoComponent } from './itinerario-lotacao.component';

describe('ItinerarioLotacaoComponent', () => {
  let component: ItinerarioLotacaoComponent;
  let fixture: ComponentFixture<ItinerarioLotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioLotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
