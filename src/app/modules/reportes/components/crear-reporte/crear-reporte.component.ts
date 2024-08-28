import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-reporte',
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.scss']
})
export class CrearReporteComponent {

  reporteForm: FormGroup;

  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor( 
    private builder: FormBuilder,
    
  ){
    this.reporteForm = this.builder.group({
      SNombreAgenteReportado: this.builder.control('',Validators.required),
      SDecripcion: this.builder.control('',Validators.required),
      SMotivo:this.builder.control('',Validators.required),
      SEvidencia: this.builder.control('',Validators.required),
    })

  }

}
