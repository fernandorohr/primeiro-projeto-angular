import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-itinerario-lotacao',
  templateUrl: './itinerario-lotacao.component.html',
  styleUrls: ['./itinerario-lotacao.component.css']
})
export class ItinerarioLotacaoComponent implements OnInit {

  list: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private onibusService: OnibusService
    ) { }

  ngOnInit(): void {
    this.openItinerary();
  }

  //função que volta pra página anterior
  back(): void {
    this.location.back();
  }

  openItinerary(): void {
    //pega o ID pela rota
    const id = +this.route.snapshot.paramMap.get('id');
    this.onibusService.callItinerary(id)
      .subscribe(data => {
        //retira os tres ultimos itens do objeto (idlinha, nome e codigo)
        this.list = Object.keys(data).slice(data.length - 3, data.length)
      });
  }

}
