import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ParametrosComponent } from './components/parametros/parametros.component';


// Rutas de la app

const routes: Routes = [
  {path: '', component: DispositivosComponent},
  {path: 'dispositivos', component: DispositivosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'eventos/:id', component: EventosComponent},
  {path: 'parametros', component: ParametrosComponent}
  // {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
