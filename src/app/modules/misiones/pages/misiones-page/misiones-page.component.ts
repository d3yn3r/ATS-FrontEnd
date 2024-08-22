
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

import { GetMisionInterface } from 'src/app/interfaces/mision.interface';


@Component({
  selector: 'app-misiones-page',
  templateUrl: './misiones-page.component.html',
  styleUrls: ['./misiones-page.component.scss']
})
export class MisionesPageComponent implements  OnInit, OnDestroy{
  private unsubscribe$ = new Subject<void>();
  columnsTable = ['PK_IdMision','SEstadoMision','SNombreMision','SNombreAldea','SNombreUsuarioResponsable','SFechaSolicitud','NPago']
  //misiones = MISIONES;
  misiones!: GetMisionInterface[];
  dataSource = new MatTableDataSource<any>(this.misiones);
  rol: string | null = localStorage.getItem("rol")

  constructor( ){ }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    
  }

}
