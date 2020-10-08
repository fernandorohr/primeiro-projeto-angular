import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OnibusService } from '../onibus.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor(
    private onibusService: OnibusService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onibusService.data = undefined;
  }

  createListBus(): void {
    this.onibusService.callBus()
      .subscribe(data => this.onibusService.data = data);
    // this.router.navigate(['/onibus']);
    // this.router.navigateByUrl('/onibus', {
    //   state: this.onibusService.callBus()
    //     .subscribe(data => {
    //       list: data;
    //     })
    // });
  }

  createListLotation(): void {
    this.onibusService.callLotation()
      .subscribe(data => this.onibusService.data = data);
  }

}
