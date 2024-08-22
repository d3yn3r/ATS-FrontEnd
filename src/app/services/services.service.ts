import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from '../interfaces/loginInterface';
import { GetUsuarioInterface } from '../interfaces/usuarioInterface';



@Injectable({
  providedIn: 'root'
})
export class Services {

  API_URL:string = 'http://127.0.0.1:8000/'

  constructor(
    private http: HttpClient
  ) { }

  public Login(data: LoginInterface):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    return this.http.post<LoginInterface>(this.API_URL + 'login',data,{headers})
  }

  public getUsuario(pk_IdUser?:number):Observable<GetUsuarioInterface[]>{
    
    if(pk_IdUser != undefined){
      return this.http.get<GetUsuarioInterface[]>(this.API_URL+ `usuario/ ${pk_IdUser}`)
    }
    else{
      return this.http.get<GetUsuarioInterface[]>(this.API_URL+ `usuario`,this.createHeaders())
    }
    
  }

  private createHeaders(){
    return {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}` 
      })
    }
  }

  isLogged(){
    return localStorage.getItem('token') ? true : false;
  }

}
