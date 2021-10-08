import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';


@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ModalFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => console.log("Dialog output:", val)
    );
  }

 



}
