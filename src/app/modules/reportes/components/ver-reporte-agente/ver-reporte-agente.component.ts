import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subject, takeUntil } from 'rxjs';
import { ReportesService } from '../../services/reportes.service';
import { MatTableDataSource } from '@angular/material/table';
import { GetReporteInterface } from 'src/app/interfaces/reporte.interface';
import { MatDialog } from '@angular/material/dialog';
import { RevisarReporteComponent } from '../revisar-reporte/revisar-reporte.component';
import { CrearReporteComponent } from '../crear-reporte/crear-reporte.component';

@Component({
  selector: 'app-ver-reporte-agente',
  templateUrl: './ver-reporte-agente.component.html',
  styleUrls: ['./ver-reporte-agente.component.scss']
})
export class VerReporteAgenteComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  columnsTable = ['PK_Id_Reporte','SNombreEstado','SNombreUsuarioReporta']
  dataSource !: any;


  PK_Id_Usuario !: string | null ;
  @ViewChild(MatPaginator) Paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;

  constructor(
    private reportesService: ReportesService,
    private dialog: MatDialog,
  ){ 
    
  }

  ngOnInit(): void {
    this.PK_Id_Usuario = localStorage.getItem('PK_Id_Usuario');
    this.obtenerReportes(2);
    console.log(this.PK_Id_Usuario)
  }

  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }



  private obtenerReportes(Id_Usuario:number){
    this.reportesService.getEstadoReportes(Id_Usuario)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource<GetReporteInterface>(res);
        this.dataSource.paginator = this.Paginator;
        this.dataSource.sort = this.Sort;
      },
      error:(err) => {
        
      }
    })
  }

  AbrirModalRevisarReporte(reporte:GetReporteInterface){
    this.dialog.open(RevisarReporteComponent,{
      width:'70%',
      height:'90%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      data: {
        datosReporte: reporte
      }
    });
  }

  crearReporte(){
    this.dialog.open(CrearReporteComponent,{
      width:'70%',
      height:'90%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms'
    });
  }

}
