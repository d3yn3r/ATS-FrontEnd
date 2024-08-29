import { Component, inject, OnInit } from '@angular/core';
import { ModalRevisarMisionComponent } from '../modal-revisar-mision/modal-revisar-mision.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-detalle-mision',
  templateUrl: './detalle-mision.component.html',
  styleUrls: ['./detalle-mision.component.scss']
})
export class DetalleMisionComponent implements OnInit {

  datosMision = inject(ModalRevisarMisionComponent);
  rolUsuario = localStorage.getItem('rol');
  inputdata = this.datosMision.inputdata;
  componente = this.datosMision.componente;
  noDatos: boolean = false;
  asignarForm !: FormGroup

  constructor(
    private builder: FormBuilder,
    private dialog: MatDialog,
    public ref: MatDialogRef<ModalRevisarMisionComponent>
  ) {

  }
  ngOnInit(): void {
    this.inicializarForm();
  }

  inicializarForm() {
    this.asignarForm = this.builder.group({
      SNombreAgente: this.builder.control('', Validators.required)
    })
  }

  aceptarSolicitud() {
    const data = {
      SNombreAgente: this.asignarForm.get('SNombreAgente')?.value
    }

    if (this.asignarForm.valid) {
      this.ref.close();
      this.dialog.open(ModalSimpleComponent, {
        width: "42%",
        height: "42%",
        data: {
          titulo: 'Misión Aceptada',
          mensaje: `La mision ${this.inputdata.SNombreMision} ha sido aceptada`
        }
      })
    } else {
      this.noDatos = true;
    }
  }

  cancelarMision() {
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Misión Cancelada',
        mensaje: `La mision ${this.inputdata.SNombreMision} ha sido cancelada`
      }
    })
  }

  rechazarMision(){
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Misión Rechaza',
        mensaje: `Haz rechazado la mision ${this.inputdata.SNombreMision}`
      }
    })
  }

  aceptarMision(){
    this.ref.close();
    this.dialog.open(ModalSimpleComponent, {
      width: "42%",
      height: "42%",
      data: {
        titulo: 'Misión Aceptada',
        mensaje: `Haz aceptado la mision ${this.inputdata.SNombreMision}, ¡Buena suerte!`
      }
    })
  }
}