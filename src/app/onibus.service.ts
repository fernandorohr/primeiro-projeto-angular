import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  //Link da API de linhas de onibus
  busLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  //Link da API de linhas de lotação
  lotationLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';
  //Link da API de consulta de itinerarios
  itineraryLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  //Faz a conexão com a API de onibus
  callBus() {
    return this.http.get<any[]>(`${this.busLine}`);
  }

  //Faz a conexão com a API de onibus
  callLotation() {
    return this.http.get<any[]>(`${this.lotationLine}`);
  }

  //Faz a conexão com a API de onibus
  callItinerary(id: number) {
    return this.http.get<any[]>(`${this.itineraryLine}${id}`);
  }
}
