import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { OnibusService } from './onibus.service';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';
import { ItinerarioLotacaoComponent } from './itinerario-lotacao/itinerario-lotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    OnibusComponent,
    LotacaoComponent,
    ItinerarioOnibusComponent,
    ItinerarioLotacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [OnibusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
