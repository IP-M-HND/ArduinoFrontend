import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatButtonModule, 
  MatCardModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatNativeDateModule,
  MatPaginatorModule } from  '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AppRoutingModule } from './app-routing.module';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    DispositivosComponent,
    ParametrosComponent,
    EventosComponent,
    DispositivoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
