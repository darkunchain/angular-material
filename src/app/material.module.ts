import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';





@NgModule({

  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule

  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    TablaClientesComponent,
    ModalButtonComponent,
  ],  
  entryComponents: [
    ModalFormComponent,
    ModalButtonComponent
  ]
})
export class MaterialModule { }
