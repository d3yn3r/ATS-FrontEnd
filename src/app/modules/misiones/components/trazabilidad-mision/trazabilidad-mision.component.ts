import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisionEstadoService } from '../../services/misionEstado.service';
import { GetMisionEstadosInterface } from 'src/app/interfaces/mision-estados.interface';
import { ModalRevisarMisionComponent } from '../modal-revisar-mision/modal-revisar-mision.component';
import { Subject, take, takeUntil } from 'rxjs';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

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
        console.log(this.dataSource)
      },
      error: (err)=>{

      },
      complete:()=>{

      }
    })
  }

}
