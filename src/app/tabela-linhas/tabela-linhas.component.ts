import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-tabela-linhas',
  templateUrl: './tabela-linhas.component.html',
  styleUrls: ['./tabela-linhas.component.css']
})
export class TabelaLinhasComponent implements OnInit {

  option: number;
  list: Array<any>;

  constructor(
    private onibusService: OnibusService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.createList();
    // this.option = history.state.data
    // console.log(this.option);
    if (this.list == undefined) {
      this.list = this.onibusService.data;
    }
  }

  createList(): void {
    this.option = history.state.data;
    console.log(this.option);

    if (this.option == 1) {
      this.onibusService.callBus()
        .subscribe(data => this.list = data);
    }
    
    if (this.option == 2) {
      this.onibusService.callLotation()
        .subscribe(data => this.list = data);
    }
  }

}
