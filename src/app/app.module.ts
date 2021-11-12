import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalButtonComponent } from './components/modal-button/modal-button.component';
import { NewClientService } from './services/new-client.service';
import { ChartsModule } from 'ng2-charts';
import { ChartDiasActComponent } from './components/chart-dias-act/chart-dias-act.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChartDiasActComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [NewClientService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalFormComponent,
    ModalButtonComponent
  ]
})
export class AppModule { }
