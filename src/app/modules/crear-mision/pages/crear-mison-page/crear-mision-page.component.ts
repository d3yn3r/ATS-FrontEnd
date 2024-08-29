import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-mision-page',
  templateUrl: './crear-mision-page.component.html',
  styleUrls: ['./crear-mision-page.component.scss']
})
export class CrearMisionPageComponent {
  misionForm: FormGroup;

  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor( 
    private builder: FormBuilder,
    
  ){
    this.misionForm = this.builder.group({
      sNombre: this.builder.control('',Validators.required),
      sFechaTerminacion: this.builder.control('',Validators.required),
      nPago:this.builder.control('',Validators.required),
      sDecripcion: this.builder.control('',Validators.required),

    })

  }
}
