import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OnibusService {
  public data: Array<any>;

  //Link da API de linhas de onibus
  busLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  //Link da API de linhas de lotação
  lotationLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';
  //Link da API de consulta de itinerarios
  itineraryLine = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  //Faz a conexão com a API de onibus
  callBus(): Observable<any> {
    return this.http.get<any[]>(`${this.busLine}`);
  }

  //Faz a conexão com a API de onibus
  callLotation(): Observable<any> {
    return this.http.get<any[]>(`${this.lotationLine}`);
  }

  //Faz a conexão com a API de onibus
  callItinerary(id: number): Observable<any> {
    return this.http.get<any[]>(`${this.itineraryLine}${id}`);
  }
}
