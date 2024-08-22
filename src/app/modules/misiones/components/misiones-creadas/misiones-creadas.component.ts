import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MisionesService } from '../../services/misiones.service';
import { Subject, takeUntil } from 'rxjs';
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ModalRevisarMisionComponent } from '../modal-revisar-mision/modal-revisar-mision.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-misiones-creadas',
  templateUrl: './misiones-creadas.component.html',
  styleUrls: ['./misiones-creadas.component.scss']
})
export class MisionesCreadasComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  misionesList !: GetMisionInterface[];
  dataSource !: any;
  columnsTable = ['PK_IdMision','SEstadoMision','SNombreMision','SNombreAldea','SNombreUsuarioResponsable','SFechaSolicitud','NPago']
  rolUsuario !: string | null;
  idUsuario !: string | null;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private misionesService: MisionesService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog
  ){

  }

  ngOnInit(): void {
      this.getAllMisiones();
  }

  ngOnDestroy(): void {
      
  }
  private getAllMisiones(){
    this.rolUsuario = localStorage.getItem('rol');
    this.idUsuario = localStorage.getItem('PK_Id_Usuario'); 
    this.spinner.show()
    this.misionesService.getAllMisiones()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next: (res)=>{
        this.misionesList = this.rolUsuario === 'Lider-ANBU' ? this.misionesList = res : res.filter(mision => mision.FK_IdUsuarioRegistra === (this.idUsuario != null ? parseInt(this.idUsuario,10):0));
        this.dataSource = new MatTableDataSource<GetMisionInterface>(this.misionesList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err)=>{
        alert(`Ha ocurrido un error al cargar las misiones, ${err}`)
        this.spinner.hide()
      },
      complete:()=>{
        this.spinner.hide()
      }
      
    })
  }

  AbrirModalRevisarMision(mision: GetMisionInterface){
    this.dialog.open(ModalRevisarMisionComponent,{
      width:'60%',
      height:'95%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      autoFocus: false,
      data: {
        dataMision: mision,
        componente:'misiones-creadas'
      }
    });
  }

}
