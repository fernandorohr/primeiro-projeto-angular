import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.css']
})
export class OnibusComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
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

  //chama a função no onibusService para fazer a consulta na API de linhas de onibus e salva no vetor list
  createList(): void {
    this.onibusService.callBus()
      .subscribe(data => this.list = data);
  }

}
