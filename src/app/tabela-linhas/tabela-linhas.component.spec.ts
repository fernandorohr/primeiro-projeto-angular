import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaLinhasComponent } from './tabela-linhas.component';

describe('TabelaLinhasComponent', () => {
  let component: TabelaLinhasComponent;
  let fixture: ComponentFixture<TabelaLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
