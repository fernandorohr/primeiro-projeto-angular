import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-tabela-itinerario',
  templateUrl: './tabela-itinerario.component.html',
  styleUrls: ['./tabela-itinerario.component.css']
})
export class TabelaItinerarioComponent implements OnInit {

  list: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private onibusService: OnibusService
  ) { }

  ngOnInit(): void {
    this.openItinerary();
  }

  openItinerary(): void {
    //pega o ID pela rota
    const id = +this.route.snapshot.paramMap.get('id');
    this.onibusService.callItinerary(id)
      .subscribe(data => this.list = data);
  }

}
