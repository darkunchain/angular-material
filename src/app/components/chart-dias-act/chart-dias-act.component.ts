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
  public ch1barChartOptions: ChartOptions = {responsive: true};
  public ch1barChartLabels: Label[] = ['01', '02', '03', '04', '05', '06', '07',
  '08', '09', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21',
  '22', '23', '24', '25', '26', '27', '28','29', '30', '31'];
  public ch1barChartType: ChartType = 'bar';
  public ch1barChartLegend = true;
  public ch1barChartPlugins = [];
  public ch1barChartData: ChartDataSets[] = [];

//%%%%%%%%%%%%%%%%  Variables grafica mes  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch2barChartOptions: ChartOptions = {responsive: true};
  public ch2barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public ch2barChartType: ChartType = 'bar';
  public ch2barChartLegend = true;
  public ch2barChartPlugins = [];
  public ch2barChartData: ChartDataSets[] = [];


  //%%%%%%%%%%%%%%%%  Variables grafica mes  %%%%%%%%%%%%%%%%%%%%%%%%%%%//
  public ch3barChartOptions: ChartOptions = {responsive: true};
  public ch3barChartLabels: Label[] = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
  'Jueves', 'Viernes', 'Sabado'];
  public ch3barChartType: ChartType = 'bar';
  public ch3barChartLegend = true;
  public ch3barChartPlugins = [];
  public ch3barChartData: ChartDataSets[] = [];

  constructor(private datosGrafService:DatosGrafService) { }

  ngOnInit() {

    this.datosGrafService.getDatos$().subscribe(datos => {
      this.ch1barChartData = [{ data: datos.perDias, label: 'Días del mes' },]
      this.ch2barChartData = [{ data: datos.perMes, label: 'mes' },]
      this.ch3barChartData = [{ data: datos.perDiaSemMesAct, label: 'Día de la semana' },]
    })

  }

}
