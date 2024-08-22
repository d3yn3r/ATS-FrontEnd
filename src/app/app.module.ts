import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MatTableModule } from '@angular/material/table';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { CrearMisionModule } from './modules/crear-mision/crear-mision.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MisionesModule } from './modules/misiones/misiones.module';
import { MensajesModule } from './modules/mensajes/mensajes.module';
import { ReportesModule } from './modules/reportes/reportes.module';
import { SolicitudesModule } from './modules/solicitudes/solicitudes.module';



@NgModule({
  declarations: [
    AppComponent
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
    SharedModule,
    AuthModule,
    CrearMisionModule,
    DashboardModule,
    MisionesModule,
    MensajesModule,
    ReportesModule,
    SolicitudesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
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
