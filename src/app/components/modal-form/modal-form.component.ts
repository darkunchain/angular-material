import { Component, Inject, OnInit, Output, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Cliente } from '../../interfaces/cliente'
import { NewClientService } from '../../services/new-client.service';





@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  form: FormGroup;
  ClientData: Cliente[] = [];
  counter:number
  contador:number



  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) { nombre, telefono, tiempo }: Cliente,
    private newClientService: NewClientService) {


    this.form = fb.group({
      nombre: [nombre, Validators.required],
      telefono: [telefono, Validators.required],
      tiempo: [tiempo, Validators.required],
    });
  }

  ngOnInit() {
    this.newClientService.nuevoClienteObservable.subscribe(response => {
      this.ClientData = response
    })

  }

  close() {
    this.dialogRef.close();
  }

  min15() {
    this.form.value.tiempo = 10;
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
  }

  min30() {
    this.form.value.tiempo = 1800;
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
  }

  min60() {
    this.form.value.tiempo = 3600;
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
  }

}
