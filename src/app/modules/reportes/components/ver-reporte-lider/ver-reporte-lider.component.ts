import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ReportesService } from '../../services/reportes.service';
import { GetReporteInterface } from 'src/app/interfaces/reporte.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RevisarReporteComponent } from '../revisar-reporte/revisar-reporte.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-reporte-lider',
  templateUrl: './ver-reporte-lider.component.html',
  styleUrls: ['./ver-reporte-lider.component.scss']
})
export class VerReporteLiderComponent implements OnInit,OnDestroy {
  
  private unsubscribe$ = new Subject<void>();
  columnsTable = ['PK_Id_Reporte','SNombreEstado','SNombreUsuarioReporta','SNombreUsuarioReportado']
  dataSource : any;

  @ViewChild(MatPaginator) Paginator !: MatPaginator;
  @ViewChild(MatSort) Sort !: MatSort;

  constructor(
    private reportesService: ReportesService,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.obtenerReportes();
  }

  ngOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }



  private obtenerReportes(){
    this.reportesService.getReportes()
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
}
