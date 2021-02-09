//Servicio intermediario para obtener juegos actualizar añadir ,borrar,buscar
import { Injectable } from '@angular/core';
import {Juego} from './juegos/juego';
import {JUEGOS} from './juegos/mock-juegos';
import {MensajeService} from './mensaje.service';
//Observable es utilizado ya que no funcionaria el programa cuando hagamos peticiones(en este caso son datos falsos)
import {Observable,of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
const httpOptions={
  headers:new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
getJuegos():Observable<Juego[]>{
  return this.http.get<Juego[]>(this.juegosUrl)
  .pipe(
    tap(juegos=>this.log(`juegos obtenidos`)),
    catchError(this.handleError('getJuegos',[]))
  );

}

  private juegosUrl='api/juegos';
  private log(mensaje:string){
    this.mensajeService.add(mensaje);
  }
  constructor(
    private http:HttpClient,
    private mensajeService:MensajeService) { }

  getJuego(id:number):Observable<Juego>{
    const url=`${this.juegosUrl}/${id}`;
    return this.http.get<Juego>(url).pipe(
      tap(_=>this.log(` juego obtenido con id=${id}`)),
      catchError(this.handleError<Juego>(`getJuego id=${id}`))
    );
    }
      getJuegoNo404<Data>(id:number):Observable<Juego>{
        const url=`${this.juegosUrl}/?id=${id}`;
        return this.http.get<Juego[]>(url)
        .pipe(map(juegos=>juegos[0]),
      tap(j=>{const outcome =j ? `obtener datos`:`no se ah encontrado`;this.log(`${outcome} juego id=${id}`);
catchError(this.handleError<Juego>(`getJuego id=${id}`))
})
);
  }
  private handleError<T> (operation='operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }

  updateJuego(juego:Juego):Observable<any>{
    return this.http.put(this.juegosUrl,juego,httpOptions).pipe(
      tap(_=>this.log(`juego con  id=${juego.id} actualizado`)),
      catchError(this.handleError<any>('updateJuego'))
    );
  }
  addJuego(juego:Juego):Observable<Juego>{
    return this.http.post<Juego>(this.juegosUrl,juego,httpOptions).pipe(
      tap((juego:Juego)=>this.log(`Juego agregado con  id=${juego.id}`)),
      catchError(this.handleError<Juego>('addJuego'))
    );
  }
  deleteJuego(juego:Juego | number):Observable<Juego>{
    const id=typeof juego==='number' ? juego:juego.id;
    const url=`${this.juegosUrl}/${id}`;
    return this.http.delete<Juego>(url,httpOptions).pipe(
      tap(_=>this.log(`juego con  id=${id} eliminado`)),
      catchError(this.handleError<Juego>('deleteJuego'))
    );
  }
    searchJuegos(term:string):Observable<Juego[]>{
      if(!term.trim()){
        return of([]);
      }
      return this.http.get<Juego[]>(`${this.juegosUrl}/?name=${term}`).pipe(
        tap(_=>this.log(`juegos encontrados con la palabra "${term}"`)),
        catchError(this.handleError<Juego[]>('searchJuegos',[]))
      );
    }
  }
