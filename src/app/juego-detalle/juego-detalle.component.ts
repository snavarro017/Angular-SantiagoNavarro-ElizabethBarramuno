/*Este componente es el encargado de brindar
los detalles respecto de algun juego seleccionado*/
import { Component, OnInit,Input } from '@angular/core';
import {Juego} from '../juegos/juego';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {JuegoService} from '../juego.service';
@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.component.html',
  styleUrls: ['./juego-detalle.component.css']
})
export class JuegoDetalleComponent implements OnInit {
@Input() juego:Juego;
  constructor(
    private route:ActivatedRoute,
    private juegoService:JuegoService,
    private location:Location
  ) { }

  ngOnInit():void {
    this.getJuego();
  }
  getJuego():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.juegoService.getJuego(id).subscribe(juego=>this.juego=juego);
  }
  volver():void{
    this.location.back();
  }
  guardar():void{
    this.juegoService.updateJuego(this.juego).subscribe(()=>this.volver());
  }

}
