import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';

@Component({
  selector: 'app-revisar-mision',
  templateUrl: './modal-revisar-mision.component.html',
  styleUrls: ['./modal-revisar-mision.component.scss']
})
export class ModalRevisarMisionComponent implements OnInit,OnDestroy{

  inputdata !: GetMisionInterface;
  componente !: string;
  rol!: string | null;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalRevisarMisionComponent>,
    private FormBuilder: FormBuilder,
    private dialog: MatDialog
  ){
    this.inputdata = Data.dataMision;
    this.componente = Data.componente;
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.rol = localStorage.getItem('rol')
  }

  private getTrazabilidadMision(PK_IdMision:number){
    
  }

}
