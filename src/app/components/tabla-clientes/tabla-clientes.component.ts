import { Component, OnInit, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { StateButtonService } from 'src/app/services/state-button.service';
import { NewClientService } from '../../services/new-client.service';




@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css'],
  providers: []
})


export class TablaClientesComponent implements OnInit {

  ClientData: Cliente[] = [];
  arrayCliente: Cliente[] = [];
  displayedColumns: string[] = ['turno', 'nombre', 'telefono', 'tiempo', 'accion'];
  dataSource: Cliente[] = [];
  counter: number

  constructor(
    private newClientService: NewClientService,
    public stateButtonService: StateButtonService) {

    this.newClientService.nuevoClienteObservable.subscribe(response => {
      this.ClientData = response
      this.ClientData[0].turno = this.dataSource.length + 1;
      this.dataSource.push(this.ClientData[0]);
    })
  }

  ngOnInit() {

  }




}


