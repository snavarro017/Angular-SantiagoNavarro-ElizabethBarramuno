//Contacto con juego-service para añadir y borrar juegos
import { Component, OnInit } from '@angular/core';
import {Juego} from './juego';//Importamos la clase JUEGOS
import {JuegoService} from '../juego.service';//Importamos el servicio JuegoService

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
juegos:Juego[];
  constructor(private juegoService:JuegoService) { }//El constructor es utilizado para inicializar y definir con datos simples
  /*ngOnInit es un método del ciclo de vida de un componente que se llama inmediatamente
     después de la creación del componente y ofrece acceso a las propiedades de tipo Input del componente.
     De forma similar al constructor, ngOnInit se ejecuta una sola vez por cada componente creado.Es utilizado para
     operaciones complejas como obtener datos desde un servicio y definir variables
     basadas en input*/
  ngOnInit() {
    this.getJuegos();
  }

  getJuegos():void{
  /* toda operación asíncrona retornará una instancia Observable a la cual habrá que subscribirse para
   recibir los datos o los errores, cuando termine.
  */  this.juegoService.getJuegos().subscribe(juegos => this.juegos=juegos);
  }
  //Funcion encargada de agregar un juego
  add(name:string):void{
    name=name.trim();
    if(!name){return ;}
    this.juegoService.addJuego({name} as Juego).subscribe(juego=>{
      this.juegos.push(juego);
    })
  }
  //Funcion encargada de borrar un juego
  delete(juego:Juego):void{
    this.juegos=this.juegos.filter(j => j !==juego);
    this.juegoService.deleteJuego(juego).subscribe();
  }
}
