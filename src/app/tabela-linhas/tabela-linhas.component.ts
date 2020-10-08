import { Component, OnInit } from '@angular/core';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-tabela-linhas',
  templateUrl: './tabela-linhas.component.html',
  styleUrls: ['./tabela-linhas.component.css']
})
export class TabelaLinhasComponent implements OnInit {

  list: Array<any>;

  constructor(
    private onibusService: OnibusService
  ) { }

  ngOnInit(): void {
    this.createList();
  }

  createList(): void {
    this.onibusService.callBus()
      .subscribe(data => this.list = data);
  }

}
