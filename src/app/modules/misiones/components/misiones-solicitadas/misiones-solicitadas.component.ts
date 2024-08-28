import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';
import { ModalRevisarMisionComponent } from 'src/app/modules/misiones/components/modal-revisar-mision/modal-revisar-mision.component';
import { MisionesService } from '../../services/misiones.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-misiones-solicitadas',
  templateUrl: './misiones-solicitadas.component.html',
  styleUrls: ['./misiones-solicitadas.component.scss']
})


export class MisionesSolicitadasComponent implements OnInit,OnDestroy {
  private unsubscribe$ = new Subject<void>();
  columnsTable = ['PK_IdMision','SEstadoMision','SNombreMision','SNombreAldea','SFechaSolicitud','NPago']
  misiones!: GetMisionInterface[];
  dataSource: any;
  varLocIdUsuario = localStorage.getItem('PK_Id_Usuario')
  rolUsuario!:string | null;
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
    this.rolUsuario = localStorage.getItem('rol');
    this.misionesService.getDataMisiones(FK_IdUsuarioResponsable)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) =>{
          
          this.misiones = this.rolUsuario === 'Lider-ANBU' ? data.filter(mision => mision.SEstadoMision === 'En Asignación') : data.filter(mision => mision.SEstadoMision === 'Asignada');
          this.dataSource = new MatTableDataSource<any>(this.misiones);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        },
        error: (err) => {
          console.error('Error al obtener las misiones:', err);
        },
        complete: () => {
          console.log('Obtención de misiones solicitadas completa');
        }
      })
  }

  AbrirModalRevisarMision(mision: GetMisionInterface){
    this.dialog.open(ModalRevisarMisionComponent,{
      width:'70%',
      height:'90%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      autoFocus: false,
      data: {
        dataMision: mision,
        componente:'misiones-solicitadas'
      }
    });
  }
}
