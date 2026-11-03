import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { ServiceEmpleados } from "./service.empleados";
import { Empleado } from "../models/empleado";

@Injectable({providedIn:'root'})
export class ServiceAuth{
    constructor(private _http:HttpClient,private _service:ServiceEmpleados){}

public user = signal<Empleado | null>(null)

    login(token:string):void{
        sessionStorage.setItem('token',token)
        this._service.getPerfil().subscribe(empleado=>{
            this.user.set(empleado)
        })
    }

    logOut():void{
        sessionStorage.removeItem('token')
        this.user.set(null)
    }



}