import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { GetMisionEstadosInterface } from 'src/app/interfaces/mision-estados.interface';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MisionEstadoService } from '../../services/misionEstado.service';
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';


@Component({
  selector: 'app-modal-cambiar-estado',
  templateUrl: './modal-cambiar-estado.component.html',
  styleUrls: ['./modal-cambiar-estado.component.scss']
})
export class ModalCambiarEstadoComponent implements OnInit,OnDestroy{
  private unsubscribe$ = new Subject<void>();
  cambiarEstadoForm !: FormGroup;
  inputdata!:GetMisionInterface;
  dataSource !: GetMisionEstadosInterface[];
  noDatos : boolean = false;

  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor(
    @Inject(MAT_DIALOG_DATA) private Data: any,
    private ref: MatDialogRef<ModalCambiarEstadoComponent>,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private misionEstadoService: MisionEstadoService,
  ) {

  }

  ngOnInit(): void {
    this.CargarFormularios();
    this.inputdata = this.Data.dataMision
    this.obtenerEstados(this.inputdata.PK_IdMision);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private CargarFormularios():void{
    this.cambiarEstadoForm = this.formBuilder.group({
      estado: this.formBuilder.control('', Validators.required),
      descripcion: this.formBuilder.control('',Validators.required)
    })
  }

  private obtenerEstados(id_mision:number):void{
    this.misionEstadoService.getDataMisionEstado(id_mision)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next:(res)=>{
        this.dataSource = res.reverse();
      },
      error: (err)=>{

      },
      complete:()=>{

      }
    })
  }

  cambiarEstado() {
    const data = {
      estado: this.cambiarEstadoForm.get('estado')?.value,
      descripcion: this.cambiarEstadoForm.get('descripcion')?.value
    }
    console.log(data)
    if (this.cambiarEstadoForm.valid) {
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

}
