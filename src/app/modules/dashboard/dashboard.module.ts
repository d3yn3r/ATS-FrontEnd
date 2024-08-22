import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTableModule } from '@angular/material/table';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BarchartInvestedComponent } from './components/barchart-invested/barchart-invested.component';
import { BarchartMissionsComponent } from './components/barchart-missions/barchart-missions.component';
import { BarchartProfitsComponent } from './components/barchart-profits/barchart-profits.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { TopWidgetsComponent } from './components/top-widgets/top-widgets.component';




@NgModule({
  declarations: [
    BarchartInvestedComponent,
    BarchartMissionsComponent,
    BarchartProfitsComponent,
    PiechartComponent,
    TopWidgetsComponent,
    DashboardPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule.forRoot(),
    NgbModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    DashboardPageComponent,
    BarchartInvestedComponent,
    BarchartMissionsComponent,
    BarchartProfitsComponent,
    PiechartComponent,
    TopWidgetsComponent
  ]
})
export class DashboardModule {
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
) {
    this._matIconRegistry.addSvgIcon('agregar-usuario', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/agregar-usuario.svg'));
    this._matIconRegistry.addSvgIcon('archivo-medico-alt', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/archivo-medico-alt.svg'));
    this._matIconRegistry.addSvgIcon('bandera', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bandera.svg'));
    this._matIconRegistry.addSvgIcon('chimenea-de-la-casa', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/chimenea-de-la-casa.svg'));
    this._matIconRegistry.addSvgIcon('el', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/el.svg'));
    this._matIconRegistry.addSvgIcon('energia', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/energia.svg'));
    this._matIconRegistry.addSvgIcon('mensajes', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/mensajes.svg'));
    this._matIconRegistry.addSvgIcon('monitor-de-tablero', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/monitor-de-tablero.svg'));
    this._matIconRegistry.addSvgIcon('pinza-para-boligrafo', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/pinza-para-boligrafo.svg'));
    this._matIconRegistry.addSvgIcon('circulo-marca-x', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/circulo-marca-x.svg'));
    
}
 }