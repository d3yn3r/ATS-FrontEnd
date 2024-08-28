import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';
import { NuevoUsuarioService } from '../../services/nuevoUsuario.service';
import { ModalRevisarSolicitudComponent } from '../../components/revisar-solicitud/modal-revisar-solicitud.component';
import { MatDialog } from '@angular/material/dialog';
import { GetNuevoUsuarioInterface } from 'src/app/interfaces/usuarioNuevo.interface';

@Component({
  selector: 'app-solicitudes-page',
  templateUrl: './solicitudes-page.component.html',
  styleUrls: ['./solicitudes-page.component.scss']
})
export class SolicitudesPageComponent{
  private unsubscribe$ = new Subject<void>();
  usuariosList !: GetNuevoUsuarioInterface[];
  dataSource !: any;

  columnsTable = ['PK_Id_Usuario','SNombre','SEmail','SEscuadron','STelefono','DFechaCreacion']

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private spinner: NgxSpinnerService,
    private Service: NuevoUsuarioService,
    private dialog: MatDialog
  ){}
  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  obtenerUsuarios():void{
    this.spinner.show();
    this.Service.getUsuariosNuevos()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource<GetNuevoUsuarioInterface>(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(error) => {
        this.spinner.hide();
      },
      complete:()=>{
        this.spinner.hide();
      }
    })
  }

  AbrirModalRevisarSolicitud(Usuario: GetNuevoUsuarioInterface){
    this.dialog.open(ModalRevisarSolicitudComponent,{
      width:'50%',
      height:'85%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'500ms',
      autoFocus: false,
      data: {
        dataUsuario: Usuario,
        componente:'solicitudes-page'
      }
    });
  }
}
