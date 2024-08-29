import { GetTestability, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GetUsuarioInterface } from 'src/app/interfaces/usuarioInterface';
import { LoginInterface } from 'src/app/interfaces/loginInterface';



@Injectable({
    providedIn: 'root'
})
export class AuthService {
    usuario!: GetUsuarioInterface;
    API_URL: string = 'assets/data/usuarios.json'
    currentUser: GetUsuarioInterface | null = null;

    constructor(
        private http: HttpClient
    ) 
    { 

    }

    public Login(datoslogin: LoginInterface): Observable<GetUsuarioInterface> {
        return this.http.get<GetUsuarioInterface[]>(this.API_URL).pipe(
          map(datauser => {
            const usuarioEncontrado = datauser.find((usuario: GetUsuarioInterface) => 
              usuario.SEmail === datoslogin.sEmail && usuario.SHashedPassword === datoslogin.sHashedPassword
            );
            if (usuarioEncontrado) {
              return usuarioEncontrado;
            } else {
              throw new HttpErrorResponse({
                error: 'Usuario no encontrado o credenciales incorrectas',
                status: 401,
                statusText: 'Unauthorized'
              });
            }
          }),
          catchError((error: HttpErrorResponse) => {
            return throwError(() => error);
          })
        );
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

    setNombre(nombre:string){
        return localStorage.setItem('nombre',nombre)
    }

    getNombre(){
        return localStorage.getItem('nombre');
    }


    

}
