import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.css']
})
export class LotacaoComponent implements OnInit {

  list: Array<any>;

  constructor(
    private location: Location,
    private onibusService: OnibusService
    ) { }

  ngOnInit(): void {
    this.createList();
  }

  //função que volta pra página anterior
  back(): void {
    this.location.back();
  }

  //chama a função no onibusService para fazer a consulta na API de linhas de lotação e salva no vetor list
  createList(): void {
    this.onibusService.callLotation()
      .subscribe(data => this.list = data);
  }

}
