import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment'
import { Empleado } from '../models/empleado';

@Injectable()
export class ServiceEmpleados {
  url = environment.url;
  public user=signal<Empleado>
  constructor(private _http: HttpClient) {}

  authUser(user: User): Observable<any> {
    let request='auth/login'
    let json=JSON.stringify(user)
    let header=new HttpHeaders()
    header=header.set('content-type','application/json')
    return this._http.post(this.url+request,json,{headers:header})
  }

  getPerfil():Observable<Empleado>{
    let request='api/empleados/perfilempleado'
    let header=new HttpHeaders()
    header=header.set('Authorization','bearer '+sessionStorage.getItem('token'))
    return this._http.get<Empleado>(this.url+request,{headers:header})
}


getSubordinados():Observable<Empleado[]>{
  let request='api/empleados/subordinados'
  let header=new HttpHeaders()
  header=header.set('Authorization','bearer '+ sessionStorage.getItem('token'))
  return this._http.get<Empleado[]>(this.url+request,{headers:header})


}


}
