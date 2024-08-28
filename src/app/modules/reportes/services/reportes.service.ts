import { Injectable } from '@angular/core';
import { map, Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetReporteInterface } from 'src/app/interfaces/reporte.interface';



@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  API_URL:string = 'assets/data/reportes.json'

  constructor(
    private http: HttpClient
  ) { }

  public getEstadoReportes(FK_IdUsuarioReporta: number):Observable<GetReporteInterface[]>{
    return this.http.get<GetReporteInterface[]>(this.API_URL, this.createHeaders()).pipe(
        map(data => data.filter((reporte: GetReporteInterface)  => reporte.FK_Id_UsuarioReporta === FK_IdUsuarioReporta))
    )
  }

  public getReportes():Observable<GetReporteInterface[]>{
    return this.http.get<GetReporteInterface[]>(this.API_URL, this.createHeaders())
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