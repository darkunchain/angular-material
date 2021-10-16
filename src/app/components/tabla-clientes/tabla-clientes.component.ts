import { Component, OnInit, Input,Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { NewClientService } from '../../services/new-client.service';


@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})


export class TablaClientesComponent implements OnInit {

 ClientData: Cliente[] = [];
 arrayCliente: Cliente[] = [];
  // form!: FormGroup;

  displayedColumns: string[] = ['turno', 'nombre', 'telefono', 'tiempo', 'accion'];
  dataSource: Cliente[] = [];

  constructor(private newClientService:NewClientService) {}

  ngOnInit(): void {
    this.newClientService.nuevoClienteObservable.subscribe(response => {
      this.ClientData = response
      console.log('this.ClientData: ', this.ClientData[0])
      this.ClientData[0].turno = this.ClientData.length;
      this.arrayCliente.push(this.ClientData[0]);
      this.dataSource = this.arrayCliente
      console.log('this.arrayCliente: ', this.dataSource)
    })

  }

  actualizar(Cliente:Cliente[]) {
    this.newClientService.nuevoCliente(Cliente);
    this.dataSource = this.ClientData;
    console.log('this.dataSource ', this.dataSource)
  }

}


