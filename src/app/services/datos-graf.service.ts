import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosGrafService {

  datosBackServ:any;

  private datosBack$ = new Subject<any>();
  datosObservable = this.datosBack$.asObservable();

  datosBackShare(datos: any) {
    this.datosBackServ = datos;
    console.log('datosBackServ: ',this.datosBackServ)
    this.datosBack$.next(datos)
  }

}
