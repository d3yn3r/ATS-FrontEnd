import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.scss']
})
export class CrearReporteComponent {

  reporteForm: FormGroup;
  noDatos!:boolean;
  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor( 
    private builder: FormBuilder,
    private ref: MatDialogRef<CrearReporteComponent>,
    private dialog: MatDialog,
    
  ){
    this.reporteForm = this.builder.group({
      SNombreAgenteReportado: this.builder.control('',Validators.required),
      SDecripcion: this.builder.control('',Validators.required),
      SMotivo:this.builder.control('',Validators.required),
      SEvidencia: this.builder.control('',Validators.required),
    })

  }


  crearReporte() {
    if(this.reporteForm.valid){
      this.ref.close();
      this.dialog.open(ModalSimpleComponent, {
        width: "42%",
        height: "42%",
        data: {
          titulo: 'Reporte Creado',
          mensaje: `El creado en el sistema, pronto tendrás noticias`
        }
      })
    }else{
      this.noDatos = true
    }
    

  }

}
