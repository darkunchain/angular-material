import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

const ClientData: Cliente[] = [
  {turno: 1, nombre: 'Juan Lucas Prieto Rugeles', telefono: 3002790329, tiempo: '15:00', accion: ''},
  {turno: 2, nombre: 'Emma Prieto Rugeles', telefono: 3115761651, tiempo: '30:00', accion: ''},
  {turno: 3, nombre: 'Luis Fernando Prieto Jimenez', telefono: 3175027179, tiempo: '15:00',accion: ''},
];

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})


export class TablaClientesComponent implements OnInit {

  displayedColumns: string[] = ['turno', 'nombre', 'telefono', 'tiempo', 'accion'];
  dataSource = ClientData;

  constructor() { }


  ngOnInit(): void {
  }

}
