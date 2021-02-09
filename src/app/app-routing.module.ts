import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {JuegosComponent} from './juegos/juegos.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JuegoDetalleComponent} from './juego-detalle/juego-detalle.component';
//Encargado de realizar las direcciones url ya sea para el dashboard ,lista de juegos o detalles de los juegos
const routes:Routes=[
{path:'juegos',component:JuegosComponent},
{path:'dashboard',component:DashboardComponent},
{path:'',redirectTo:'/dashboard',pathMatch:'full'},
{path:'detail/:id',component:JuegoDetalleComponent},
];
@NgModule({
  exports: [
    RouterModule
  ],imports:[RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
})
export class AppRoutingModule { }
