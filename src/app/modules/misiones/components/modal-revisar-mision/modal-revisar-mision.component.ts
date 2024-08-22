import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';

@Component({
  selector: 'app-revisar-mision',
  templateUrl: './modal-revisar-mision.component.html',
  styleUrls: ['./modal-revisar-mision.component.scss']
})
export class ModalRevisarMisionComponent implements OnInit{

  inputdata !: GetMisionInterface;
  componente !: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalRevisarMisionComponent>,
    private FormBuilder: FormBuilder,
    private dialog: MatDialog
  ){
    this.inputdata = Data.dataMision;
    this.componente = Data.componente;
  }
  ngOnInit(): void {
    
  }

  private getTrazabilidadMision(PK_IdMision:number){
    
  }

}
