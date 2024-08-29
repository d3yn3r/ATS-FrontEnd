import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetNuevoUsuarioInterface } from 'src/app/interfaces/usuarioNuevo.interface';
import { GetMensajeInterface, PostMensajeInterface } from 'src/app/interfaces/mensaje.interface';



@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  API_URL: string = 'assets/data/mensajes.json'
  private mensajeSeleccionadoSource = new BehaviorSubject<GetMensajeInterface | null>(null);

  constructor(
    private http: HttpClient
  ) { }

  mensajeSeleccionado$ = this.mensajeSeleccionadoSource.asObservable();

  seleccionarMensaje(mensaje: any) {
    this.mensajeSeleccionadoSource.next(mensaje);
  }

  public getMensajes(FK_Id_UsuarioRecibe: number): Observable<GetMensajeInterface[]> {
    return this.http.get<GetMensajeInterface[]>(this.API_URL, this.createHeaders()).pipe(
      map(data => data.filter((mensaje: GetMensajeInterface) => mensaje.FK_Id_UsuarioRecibe === FK_Id_UsuarioRecibe))
    )
  }

  public postMensaje(data: PostMensajeInterface): Observable<PostMensajeInterface>{
    return this.http.post<PostMensajeInterface>(this.API_URL,data,this.createHeaders())
  }

  private createHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      })
    }
  }


}