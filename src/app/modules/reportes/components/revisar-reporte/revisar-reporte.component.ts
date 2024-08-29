import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetReporteInterface } from 'src/app/interfaces/reporte.interface';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-revisar-reporte',
  templateUrl: './revisar-reporte.component.html',
  styleUrls: ['./revisar-reporte.component.scss']
})
export class RevisarReporteComponent implements OnInit{

  rol!: string | null;
  inputdata !: GetReporteInterface;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<RevisarReporteComponent>,
    private dialog: MatDialog,
  ) {
    this.rol = localStorage.getItem('rol');
    this.inputdata = Data.datosReporte;
  }
  ngOnInit(): void {
    
  }

  aceptarReporte() {
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Reporte Aceptada',
        mensaje: `El agente ${this.inputdata.SNombreUsuarioReportado} ha sido bloqueado del sistema`
      }
    })

  }

  archivarReporte(){
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Reporte Archivado',
        mensaje: `El reporte sobre el agente ${this.inputdata.SNombreUsuarioReportado} ha sido archivado`
      }
    })

  }

}
