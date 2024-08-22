import { Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUsuarioInterface } from 'src/app/interfaces/usuarioInterface';
import { LoginInterface } from 'src/app/interfaces/loginInterface';



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    usuario!: GetUsuarioInterface;
    API_URL: string = 'assets/data/usuarios.json'

    constructor(
        private http: HttpClient
    ) 
    { 
    }

    public Login(datoslogin: LoginInterface): Observable<GetUsuarioInterface[]> {
        return this.http.get<GetUsuarioInterface[]>(this.API_URL).pipe(
            map(datauser => datauser.filter((usuario: GetUsuarioInterface)  => usuario.SEmail === datoslogin.sEmail && usuario.SHashedPassword === datoslogin.sHashedPassword))
        )
    }

    setRole(role: string) {
        localStorage.setItem('rol', role);
    }
    
    getRole() {
        return localStorage.getItem('rol');
    }
    
    clearRole() {
        localStorage.removeItem('rol');
    }

    isLogged() {
        return localStorage.getItem('token') ? true : false;
    }

}
