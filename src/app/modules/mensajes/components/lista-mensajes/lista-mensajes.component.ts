import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { GetMensajeInterface } from 'src/app/interfaces/mensaje.interface';
import { MensajesService } from '../../services/mensajes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, take, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrearMensajeComponent } from '../crear-mensaje/crear-mensaje.component';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.scss']
})
export class ListaMensajesComponent implements OnInit,OnDestroy {

  private unsubscribe$ = new Subject<void>();

  columnsTable : string[] = ['Mensaje']
  dataSource !: any;
  PK_Id_Usuario !: string | null

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private mensajeService: MensajesService,
    private dialog: MatDialog

  ) {

  }

  ngOnInit(): void {
    this.PK_Id_Usuario = localStorage.getItem('PK_Id_Usuario')
    this.getMensajes(this.PK_Id_Usuario !== null ? parseInt(this.PK_Id_Usuario,10):0)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  



  private getMensajes(PK_Id_Usuario:number){
    this.mensajeService.getMensajes(PK_Id_Usuario)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next:(res)=>{
        console.log(PK_Id_Usuario)
        this.dataSource = new MatTableDataSource<GetMensajeInterface>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  seleccionarMensaje(mensaje: GetMensajeInterface) {
    this.mensajeService.seleccionarMensaje(mensaje);
  }

  crearMensaje(){
    this.dialog.open(CrearMensajeComponent,{
      width:'60%',
      height:'80%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
    })
  }
}
