import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetNotificacionInterface } from 'src/app/interfaces/notificacion.interface';



@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  API_URL: string = 'assets/data/notificaciones.json';

  constructor(
    private http: HttpClient
  ) { }

  public getNotificaciones(PK_Id_Usuario:number):Observable<GetNotificacionInterface[]>{
    return this.http.get<GetNotificacionInterface[]>(this.API_URL, this.createHeaders()).pipe(
      map(dataNotificacion => dataNotificacion.filter((notificacion: GetNotificacionInterface)  => notificacion.FK_IdUsuarioNotificado === PK_Id_Usuario))
    )
  }

  private createHeaders(){
    return {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}` 
      })
    }
  }

}