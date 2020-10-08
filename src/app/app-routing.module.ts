import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { ItinerarioOnibusComponent } from './itinerario-onibus/itinerario-onibus.component';
import { ItinerarioLotacaoComponent } from './itinerario-lotacao/itinerario-lotacao.component';

const routes: Routes = [
  {path: 'home', component: PaginaInicialComponent},
  {path: 'onibus', component: OnibusComponent},
  {path: 'itinerario/:id', component: ItinerarioOnibusComponent},
  {path: 'lotacao', component: LotacaoComponent},
  {path: 'lotacao/itinerario-lotacao/:id', component: ItinerarioLotacaoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
