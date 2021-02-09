import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import {FormsModule} from '@angular/forms';
import { JuegoDetalleComponent } from './juego-detalle/juego-detalle.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { JuegoSearchComponent } from './juego-search/juego-search.component';
@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    JuegoDetalleComponent,
    MensajesComponent,
    DashboardComponent,
    JuegoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
