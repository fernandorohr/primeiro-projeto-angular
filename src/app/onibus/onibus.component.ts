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

  constructor( ) { }

  ngOnInit(): void {
  }

}
