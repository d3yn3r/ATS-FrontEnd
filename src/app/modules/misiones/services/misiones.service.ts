import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetMisionInterface } from 'src/app/interfaces/mision.interface';



@Injectable({
  providedIn: 'root'
})
export class MisionesService {

  API_URL:string = 'assets/data/misiones.json'

  constructor(
    private http: HttpClient
  ) { }

  public getDataMisiones(FK_IdUsuarioResponsable: number):Observable<GetMisionInterface[]>{
    return this.http.get<GetMisionInterface[]>(this.API_URL, this.createHeaders()).pipe(
        map(data => data.filter((mision: GetMisionInterface)  => mision.FK_IdUsuarioResponsable === FK_IdUsuarioResponsable))
    )
  }

  public getAllMisiones():Observable<GetMisionInterface[]>{
    return this.http.get<GetMisionInterface[]>(this.API_URL, this.createHeaders())
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