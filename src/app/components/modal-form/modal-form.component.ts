import { Component, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { Cliente } from '../../interfaces/cliente'




@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Output() form: FormGroup;
  @Output() ClientData: Cliente[] = [];
  //form!: FormGroup;
  //ClientData: Cliente[] =[];

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) { nombre, telefono, tiempo }: Cliente) {


    this.form = fb.group({
      nombre: [nombre, Validators.required],
      telefono: [telefono, Validators.required],
      tiempo: [tiempo, Validators.required],
    });
  }

  ngOnInit() {
  }

  save() {

    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    console.log('ClientData: ',this.ClientData,' - Form: ', this.form.value)


  }

  close() {

    this.dialogRef.close();
  }

  min15() {
    this.form.value.tiempo = '15:00';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    console.log('save: ',this.ClientData)
  }

  min30() {
    this.form.value.tiempo = '30:00'
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    console.log('save: ',this.ClientData)
  }

  min60() {
    this.form.value.tiempo = '60:00';
    this.ClientData.push(this.form.value);
    this.dialogRef.close(this.form.value);
    console.log('save: ',this.ClientData)

  }



}
