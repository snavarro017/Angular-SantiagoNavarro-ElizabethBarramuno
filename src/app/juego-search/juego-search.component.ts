import { Component, OnInit } from '@angular/core';
import {Observable,Subject} from 'rxjs';
import{debounceTime,distinctUntilChanged,switchMap} from 'rxjs/operators';
import{Juego} from '../juegos/juego';
import{JuegoService} from '../juego.service';

@Component({
  selector: 'app-juego-search',
  templateUrl: './juego-search.component.html',
  styleUrls: ['./juego-search.component.css']
})
export class JuegoSearchComponent implements OnInit {
juegos$:Observable<Juego[]>;//Observable es una instancia de una peticion
private searchTerms=new Subject<string>();
  constructor(private juegoService:JuegoService) { }
search(term:string):void{//Metodo encargado de la busqueda de un juego
  this.searchTerms.next(term);
}
//Term hace referencia a terminos para ayudar en la busqueda
  ngOnInit():void {
    this.juegos$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.juegoService.searchJuegos(term)),
    );
  }

}
