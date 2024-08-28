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
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { SideNavComponent } from './side-nav/pages/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificacionesItemComponent } from './side-nav/components/notificaciones-item/notificaciones-item.component';





@NgModule({
  declarations: [
    SideNavComponent,
    LayoutComponent,
    PageNotAuthorizedComponent,
    PageNotFoundComponent,
    NotificacionesItemComponent
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
    MatButtonModule, 
    MatMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports:[
    SideNavComponent,
    LayoutComponent,
    PageNotAuthorizedComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
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
    this._matIconRegistry.addSvgIcon('bell', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bell.svg'));
    this._matIconRegistry.addSvgIcon('bell-notification', this._domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/bell-notification-social-media.svg'));
  }
}