import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetMisionEstadosInterface } from 'src/app/interfaces/mision-estados.interface';




@Injectable({
  providedIn: 'root'
})
export class MisionEstadoService {

  API_URL:string = 'assets/data/mision-estados.json'

  constructor(
    private http: HttpClient
  ) { }

  public getDataMisionEstado(FK_Id_Mision: number):Observable<GetMisionEstadosInterface[]>{
    return this.http.get<GetMisionEstadosInterface[]>(this.API_URL, this.createHeaders()).pipe(
        map(data => data.filter((mision: GetMisionEstadosInterface)  => mision.FK_Id_Mision === FK_Id_Mision))
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