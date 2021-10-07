import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';


@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModalFormComponent);
  }



}
