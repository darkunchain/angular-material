import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatosGrafService } from 'src/app/services/datos-graf.service';

@Component({
  selector: 'app-chart-dias-act',
  templateUrl: './chart-dias-act.component.html',
  styleUrls: ['./chart-dias-act.component.css']
})
export class ChartDiasActComponent implements OnInit {

  mydata:[]=[]

//%%%%%%%%%%%%%%%%  Variables grafica dias  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch1barChartOptions: ChartOptions = {
    responsive: true,
    title:  {
      display: true,
      text: 'Clientes que ingresaron cada día durante el mes',
      fontSize: 18,
      fontColor: "#111"
    },

  };
  public ch1barChartLabels: Label[] = ['01', '02', '03', '04', '05', '06', '07',
  '08', '09', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21',
  '22', '23', '24', '25', '26', '27', '28','29', '30', '31'];
  public ch1barChartBackground:Label[] = [
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ]
  public ch1barChartType: ChartType = 'bar';
  public ch1barChartLegend = false;
  public ch1barChartPlugins = [];
  public ch1barChartData: ChartDataSets[] = [];

//%%%%%%%%%%%%%%%%  Variables grafica mes  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch2barChartOptions: ChartOptions = {
    responsive: true,
    title:  {
      display: true,
      text: 'Clientes que ingresaron durante el mes',
      fontSize: 18,
      fontColor: "#111"
    },
  };
  public ch2barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public ch2barChartBackground:Label[] = [
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'
  ]
  public ch2barChartType: ChartType = 'bar';
  public ch2barChartLegend = false;
  public ch2barChartPlugins = [];
  public ch2barChartData: ChartDataSets[] = [];


  //%%%%%%%%%%%%%%%%  Variables grafica dia de la semana mes actual  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch3barChartOptions: ChartOptions = {
    responsive: true,
    title:  {
      display: true,
      text: 'Clientes que ingresaron por día durante el mes',
      fontSize: 18,
      fontColor: "#111"
    },
  };
  public ch3barChartLabels: Label[] = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
  'Jueves', 'Viernes', 'Sabado'];
  public ch3barChartBackground:Label[] = [
    'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ]
  public ch3barChartType: ChartType = 'bar';
  public ch3barChartLegend = false;
  public ch3barChartPlugins = [];
  public ch3barChartData: ChartDataSets[] = [];

  constructor(private datosGrafService:DatosGrafService) { }

  ngOnInit() {

    this.datosGrafService.getDatos$().subscribe(datos => {
      this.ch1barChartData = [{
        data: datos.perDias,
        label: 'Clientes',
        backgroundColor: this.ch1barChartBackground
      }]
      this.ch2barChartData = [{
        data: datos.perMes,
        label: 'Clientes',
        backgroundColor: this.ch2barChartBackground
      }]
      this.ch3barChartData = [{
        data: datos.perDiaSemMesAct,
        label: 'Clientes',
        backgroundColor: this.ch3barChartBackground
      }]
    })

  }

}
