import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisionEstadoService } from '../../services/misionEstado.service';
import { GetMisionEstadosInterface } from 'src/app/interfaces/mision-estados.interface';
import { ModalRevisarMisionComponent } from '../modal-revisar-mision/modal-revisar-mision.component';
import { Subject, takeUntil } from 'rxjs';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalCambiarEstadoComponent } from '../modal-cambiar-estado/modal-cambiar-estado.component';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-trazabilidad-mision',
  templateUrl: './trazabilidad-mision.component.html',
  styleUrls: ['./trazabilidad-mision.component.scss']
})
export class TrazabilidadMisionComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  cambiarEstadoForm !: FormGroup;
  dataSource !: GetMisionEstadosInterface[];

  datosMision = inject(ModalRevisarMisionComponent);
  inputdata = this.datosMision.inputdata;
  componente = this.datosMision.componente;
  rol!:string | null
  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    private misionEstadoService: MisionEstadoService,
    public ref: MatDialogRef<ModalCambiarEstadoComponent>,
    private dialog: MatDialog
  ){

  }

  ngOnInit(): void {
      this.CargarFormularios();
      this.obtenerEstados(this.inputdata.PK_IdMision);
      this.rol = localStorage.getItem('rol')
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private CargarFormularios(){
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

  cambiarEstado(){
    const data = {
      estado: this.cambiarEstadoForm.get('estado')?.value,
      descripcion: this.cambiarEstadoForm.get('descripcion')?.value
    }

    if(this.cambiarEstadoForm.valid){
      this.ref.close()
      this.dialog.open(ModalSimpleComponent, {
        width: "42%",
        height: "42%",
        data: {
          titulo: 'Estado Cambiado',
          mensaje: `La mision ${this.inputdata.SNombreMision} ha cambiado al estado${data.estado}`
        }
      })
    }
  }

}
