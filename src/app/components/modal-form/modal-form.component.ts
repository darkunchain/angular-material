import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ModalButtonComponent } from '../modal-button/modal-button.component';
import { Cliente } from '../../interfaces/cliente'


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {

  form: FormGroup;


  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) { turno, nombre, telefono, tiempo }: Cliente) {



    this.form = fb.group({
      turno: [turno],
      nombre: [nombre, Validators.required],
      telefono: [telefono, Validators.required],
      tiempo: [tiempo, Validators.required],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
