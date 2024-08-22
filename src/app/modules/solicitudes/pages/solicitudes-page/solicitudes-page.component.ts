import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';
import { GetUsuarioInterface } from 'src/app/interfaces/usuarioInterface';
import { Services } from 'src/app/services/services.service';

@Component({
  selector: 'app-solicitudes-page',
  templateUrl: './solicitudes-page.component.html',
  styleUrls: ['./solicitudes-page.component.scss']
})
export class SolicitudesPageComponent{
  private unsubscribe$ = new Subject<void>();
  usuariosList !: any;

  columnsTable = ['pk_IdUser','sNombre','sEmail','sEscuadron','bActivo','fk_IdRol']

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private spinner: NgxSpinnerService,
    private Service: Services
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
    this.Service.getUsuario(undefined)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next:(res)=>{
        this.usuariosList = new MatTableDataSource<GetUsuarioInterface>(res);
        this.usuariosList.paginator = this.paginator;
        this.usuariosList.sort = this.sort;
      },
      error:(error) => {
        this.spinner.hide();
      },
      complete:()=>{
        this.spinner.hide();
      }
    })
  }
}
