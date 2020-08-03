import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  linhasOnibus = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  linhasLotacao = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';
  linhasItinerario = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  callBus() {
    return this.http.get<any[]>(`${this.linhasOnibus}`);
  }

  callLotation() {
    return this.http.get<any[]>(`${this.linhasLotacao}`);
  }

  callItinerary(id: number) {
    return this.http.get<any[]>(`${this.linhasItinerario}${id}`);
  }
}
