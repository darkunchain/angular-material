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


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['01', '02', '03', '04', '05', '06', '07',
  '08', '09', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20', '21',
  '22', '23', '24', '25', '26', '27', '28','29', '30', '31'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private datosGrafService:DatosGrafService) { }

  ngOnInit() {

    this.datosGrafService.getDatos$().subscribe(datos => {
      this.mydata = datos.perDias
      this.barChartData = [{ data: this.mydata, label: 'Días del mes' },]
    })

  }

}
