import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';


@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})


export class TablaClientesComponent implements OnInit {

  @Input() ClientData: Cliente[] = [];
  @Input()
  form!: FormGroup;



  displayedColumns: string[] = ['turno', 'nombre', 'telefono', 'tiempo', 'accion'];
  dataSource = this.ClientData;




  constructor() {}




  ngOnInit(): void {

  }

}


