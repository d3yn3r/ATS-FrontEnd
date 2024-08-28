import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';
import { MisionesService } from '../../services/misiones.service';
import { ModalCambiarEstadoComponent } from '../modal-cambiar-estado/modal-cambiar-estado.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-misiones-aceptadas',
  templateUrl: './misiones-aceptadas.component.html',
  styleUrls: ['./misiones-aceptadas.component.scss']
})
export class MisionesAceptadasComponent implements OnInit,OnDestroy{
  private unsubscribe$ = new Subject<void>();
  columnsTable = ['PK_IdMision','SEstadoMision','SNombreMision','SNombreAldea','SFechaSolicitud','NPago']
  misiones!: GetMisionInterface[];
  dataSource: any;
  varLocIdUsuario = localStorage.getItem('PK_Id_Usuario')

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private dialog: MatDialog,
    private misionesService: MisionesService
  ){ }
  
  ngOnInit(): void {
    this.GetMisiones(this.varLocIdUsuario != null ? parseInt(this.varLocIdUsuario,10):0);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private GetMisiones(FK_IdUsuarioResponsable:number){
    this.misionesService.getDataMisiones(FK_IdUsuarioResponsable)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) =>{
          this.misiones = data.filter(mision => mision.SEstadoMision !== 'Asignada');
          this.dataSource = new MatTableDataSource<any>(this.misiones);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error al obtener las misiones:', err);
        },
        complete: () => {
          console.log('Obtención de misiones asignadas completa');
        }
      })
  }

  AbrirModalRevisarMision(mision: GetMisionInterface){
    this.dialog.open(ModalCambiarEstadoComponent,{
      width:'70%',
      height:'90%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      data: {
        dataMision: mision
      }
    });
  }
}
