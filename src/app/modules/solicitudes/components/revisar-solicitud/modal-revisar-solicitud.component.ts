import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetNuevoUsuarioInterface } from 'src/app/interfaces/usuarioNuevo.interface';

@Component({
  selector: 'app-modal-revisar-solicitud',
  templateUrl: './modal-revisar-solicitud.component.html',
  styleUrls: ['./modal-revisar-solicitud.component.scss']
})
export class ModalRevisarSolicitudComponent implements OnInit {

  inputdata!:GetNuevoUsuarioInterface;
  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalRevisarSolicitudComponent>,
    private dialog: MatDialog 
  ) {

  }

  ngOnInit(): void {
      this.inputdata = this.Data.dataUsuario;
  }

}
