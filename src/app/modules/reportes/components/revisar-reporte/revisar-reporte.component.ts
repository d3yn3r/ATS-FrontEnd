import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetReporteInterface } from 'src/app/interfaces/reporte.interface';
import { ModalCambiarEstadoComponent } from 'src/app/modules/misiones/components/modal-cambiar-estado/modal-cambiar-estado.component';

@Component({
  selector: 'app-revisar-reporte',
  templateUrl: './revisar-reporte.component.html',
  styleUrls: ['./revisar-reporte.component.scss']
})
export class RevisarReporteComponent {

  rol!: string | null;
  inputdata !: GetReporteInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalCambiarEstadoComponent>,
    private dialog: MatDialog,
  ){
    this.rol= localStorage.getItem('rol');
    this.inputdata = Data.datosReporte;
  }

}
