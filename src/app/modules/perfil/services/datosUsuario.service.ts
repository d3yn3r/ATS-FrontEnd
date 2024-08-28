import { GetTestability, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUsuarioInterface } from 'src/app/interfaces/usuarioInterface';
import { LoginInterface } from 'src/app/interfaces/loginInterface';



@Injectable({
    providedIn: 'root'
})
export class DatosUsuarioService {

    usuario!: GetUsuarioInterface;
    API_URL: string = 'assets/data/usuarios.json'

    constructor(
        private http: HttpClient
    ) {

    }

    public getDatosUsuario(PK_Id_Usuario: number): Observable<GetUsuarioInterface[]> {
        return this.http.get<GetUsuarioInterface[]>(this.API_URL, this.createHeaders()).pipe(
            map(datauser => datauser.filter((usuario: GetUsuarioInterface) => usuario.PK_Id_Usuario === PK_Id_Usuario))
        )
    }

    public getAllUsuarios(): Observable<GetUsuarioInterface[]> {
        return this.http.get<GetUsuarioInterface[]>(this.API_URL, this.createHeaders())
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