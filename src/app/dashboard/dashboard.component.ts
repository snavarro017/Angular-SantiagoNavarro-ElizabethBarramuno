import { Component, OnInit } from '@angular/core';
import {Juego} from '../juegos/juego';
import {JuegoService} from '../juego.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
juegos:Juego[]=[];
  constructor(private juegoService:JuegoService) { }
  /* ngOnInit es un método del ciclo de vida de un componente la creación del componente y ofrece el acceso a las propiedad del get .*/
  ngOnInit() {
    this.getJuegos();
  }
  // en juegos.slice muestra los juegos que esten en el arreglo en las posiciones desde la 0 a la 3 inclusive
  getJuegos():void{
    this.juegoService.getJuegos().subscribe(juegos=>this.juegos=juegos.slice(0,4));
  }

}
