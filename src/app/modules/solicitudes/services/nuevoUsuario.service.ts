import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetNuevoUsuarioInterface } from 'src/app/interfaces/usuarioNuevo.interface';



@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  API_URL:string = 'assets/data/nuevos-usuarios.json'

  constructor(
    private http: HttpClient
  ) { }

  public getUsuariosNuevos():Observable<GetNuevoUsuarioInterface[]>{
    return this.http.get<GetNuevoUsuarioInterface[]>(this.API_URL, this.createHeaders())
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