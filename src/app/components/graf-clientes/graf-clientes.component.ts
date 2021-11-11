import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { DatosGrafService } from 'src/app/services/datos-graf.service';


@Component({
  selector: 'app-graf-clientes',
  templateUrl: './graf-clientes.component.html',
  styleUrls: ['./graf-clientes.component.css']
})
export class GrafClientesComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  numDia:number = 1
  numSem:number = 1
  numMes:number = 1
  valueDia:number = (this.numDia*100)/30;
  valueSem:number = (this.numSem*100)/210;
  valueMes:number = (this.numMes*100)/900;
  perDia:number = 0
  perSem:number = 0
  perMes:number = 0




  constructor(private datosGrafService:DatosGrafService) { }




  ngOnInit(): void {
    this.datosGrafService.getDatos$().subscribe(datos => {
      console.log('datos_finales: ', datos.contMesAct)
      this.numDia = datos.contHoy
      this.numSem = datos.contSemAct
      this.numMes = datos.contMesAct
    })



    if(this.valueDia < 10){
      this.perDia = 5;
    }else if(10 < this.valueDia && this.valueDia < 20){
      this.perDia = 10;
    }else if(20 < this.valueDia && this.valueDia < 30){
      this.perDia = 20;
    }else if(30 < this.valueDia && this.valueDia < 40){
      this.perDia = 30;
    }else if(40 < this.valueDia && this.valueDia < 50){
      this.perDia = 40;
    }else if(50 < this.valueDia && this.valueDia < 60){
      this.perDia = 50;
    }else if(60 < this.valueDia && this.valueDia < 70){
      this.perDia = 60;
    }else if(70 < this.valueDia && this.valueDia < 80){
      this.perDia = 70;
    }else if(80 < this.valueDia && this.valueDia < 90){
      this.perDia = 80;
    }else if(90 < this.valueDia && this.valueDia < 100){
      this.perDia = 90;
    }else if(this.valueDia > 100){
      this.perDia = 100;
    }


    if(this.valueSem < 10){
      this.perSem = 5;
    }else if(10 < this.valueSem && this.valueSem < 20){
      this.perSem = 10;
    }else if(20 < this.valueSem && this.valueSem < 30){
      this.perSem = 20;
    }else if(30 < this.valueSem && this.valueSem < 40){
      this.perSem = 30;
    }else if(40 < this.valueSem && this.valueSem < 50){
      this.perSem = 40;
    }else if(50 < this.valueSem && this.valueSem < 60){
      this.perSem = 50;
    }else if(60 < this.valueSem && this.valueSem < 70){
      this.perSem = 60;
    }else if(70 < this.valueSem && this.valueSem < 80){
      this.perSem = 70;
    }else if(80 < this.valueSem && this.valueSem < 90){
      this.perSem = 80;
    }else if(90 < this.valueSem && this.valueSem < 100){
      this.perSem = 90;
    }else if(this.valueSem > 100){
      this.perSem = 100;
    }


    if(this.valueMes < 10){
      this.perMes = 5;
    }else if(10 < this.valueMes && this.valueMes < 20){
      this.perMes = 10;
    }else if(20 < this.valueMes && this.valueMes < 30){
      this.perMes = 20;
    }else if(30 < this.valueMes && this.valueMes < 40){
      this.perMes = 30;
    }else if(40 < this.valueMes && this.valueMes < 50){
      this.perMes = 40;
    }else if(50 < this.valueMes && this.valueMes < 60){
      this.perMes = 50;
    }else if(60 < this.valueMes && this.valueMes < 70){
      this.perMes = 60;
    }else if(70 < this.valueMes && this.valueMes < 80){
      this.perMes = 70;
    }else if(80 < this.valueMes && this.valueMes < 90){
      this.perMes = 80;
    }else if(90 < this.valueMes && this.valueMes < 100){
      this.perMes = 90;
    }else if(this.valueMes > 100){
      this.perMes = 100;
    }


  }

}
