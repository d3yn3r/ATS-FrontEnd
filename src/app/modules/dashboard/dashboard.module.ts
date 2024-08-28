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

import { BarchartMissionsComponent } from './components/barchart-missions/barchart-missions.component';

import { PiechartComponent } from './components/piechart/piechart.component';
import { TopWidgetsComponent } from './components/top-widgets/top-widgets.component';
import { ChartModule } from 'angular-highcharts';




@NgModule({
  declarations: [
    BarchartMissionsComponent,
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
    MatDialogModule,
    ChartModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    DashboardPageComponent,
    BarchartMissionsComponent,
    PiechartComponent,
    TopWidgetsComponent
  ]
})
export class DashboardModule {
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
) {
    this._matIconRegistry.addSvgIcon('usuarios-alt', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/usuarios-alt.svg'));
    this._matIconRegistry.addSvgIcon('comprobacion-del-portapapeles', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/comprobacion-del-portapapeles.svg'));
    this._matIconRegistry.addSvgIcon('dolar-de-saco', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dolar-de-saco.svg'));
    this._matIconRegistry.addSvgIcon('hourglass-end', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/hourglass-end.svg'));
    
    
}
 }