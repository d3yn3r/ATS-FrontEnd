import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-simple',
  templateUrl: './modal-simple.component.html',
  styleUrls: ['./modal-simple.component.scss']
})
export class ModalSimpleComponent implements OnInit{

  titulo !: string;
  mensaje !:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalSimpleComponent>
  ) {
    
  }
  ngOnInit(): void {
    this.titulo = this.Data.titulo;
    this.mensaje = this.Data.mensaje;
  }

  cerrarModal(){
    this.ref.close();
  }

}
