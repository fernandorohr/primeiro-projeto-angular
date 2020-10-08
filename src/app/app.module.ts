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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TabelaLinhasComponent } from './tabela-linhas/tabela-linhas.component';
import { TabelaItinerarioComponent } from './tabela-itinerario/tabela-itinerario.component';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    OnibusComponent,
    LotacaoComponent,
    ItinerarioOnibusComponent,
    ItinerarioLotacaoComponent,
    FooterComponent,
    HeaderComponent,
    TabelaLinhasComponent,
    TabelaItinerarioComponent,
    BotaoVoltarComponent
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
