import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MisionesService } from '../../services/misiones.service';

@Component({
  selector: 'app-modal-cambiar-estado',
  templateUrl: './modal-cambiar-estado.component.html',
  styleUrls: ['./modal-cambiar-estado.component.scss']
})
export class ModalCambiarEstadoComponent {
  inputdata!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalCambiarEstadoComponent>,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private misionService: MisionesService
  ){
    this.inputdata = this.Data;
  }
}
