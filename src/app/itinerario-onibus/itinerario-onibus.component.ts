import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-itinerario-onibus',
  templateUrl: './itinerario-onibus.component.html',
  styleUrls: ['./itinerario-onibus.component.css']
})
export class ItinerarioOnibusComponent implements OnInit {

  list: Array<any>;

  constructor( ) { }

  ngOnInit(): void {
  }

}
