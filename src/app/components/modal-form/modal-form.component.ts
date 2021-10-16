import { Component, Inject, OnInit, Output, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { Cliente } from '../../interfaces/cliente'
import { NewClientService } from '../../services/new-client.service';
import { DataSource } from '@angular/cdk/collections';




@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  form: FormGroup;
  ClientData: Cliente[] = [];



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

  save() {

    this.form.value.tiempo = '15:00';
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
  }

  close() {
    this.dialogRef.close();
  }

  min15() {
    this.form.value.tiempo = '15:00';
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
    //console.log('save15_ClientData: ',this.ClientData,' - Form: ', this.form.value)
  }

  min30() {
    this.form.value.tiempo = '30:00';
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
    //console.log('save30_ClientData: ',this.ClientData,' - Form: ', this.form.value)
  }

  min60() {
    this.form.value.tiempo = '60:00';
    this.form.value.accion = 'activo';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    this.newClientService.nuevoCliente(this.ClientData);
    //console.log('save60_ClientData: ',this.ClientData,' - Form: ', this.form.value)

  }



}
