import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetNuevoUsuarioInterface } from 'src/app/interfaces/usuarioNuevo.interface';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-modal-revisar-solicitud',
  templateUrl: './modal-revisar-solicitud.component.html',
  styleUrls: ['./modal-revisar-solicitud.component.scss']
})
export class ModalRevisarSolicitudComponent implements OnInit {

  inputdata!: GetNuevoUsuarioInterface;

  noDatos!: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalRevisarSolicitudComponent>,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.inputdata = this.Data.dataUsuario;
  }

  aceptarSolicitud() {
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Agente Aceptado',
        mensaje: `El Agente ${this.inputdata.SNombre} ha sido aceptado`
      }
    })
  }

  rechazarSolicitud() {
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Agente Rechazado',
        mensaje: `El Agente ${this.inputdata.SNombre} ha sido rechazado`
      }
    })
  }

}
