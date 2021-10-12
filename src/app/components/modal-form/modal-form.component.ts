import { Component, Inject, OnInit } from '@angular/core';
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

  form!: FormGroup;



  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) {nombre,telefono,tiempo}:Cliente) {


      this.form = fb.group({
        nombre: [nombre, Validators.required],
        telefono: [telefono, Validators.required],
        tiempo: [tiempo, Validators.required],

    });





  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  min15() {
    this.dialogRef.close();
  }

  min30() {
    this.dialogRef.close();
  }

  min60() {
    this.dialogRef.close();
  }



}
