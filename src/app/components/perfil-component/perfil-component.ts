import { Component, inject, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { ServiceAuth } from '../../services/service.auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit{
  
    public _serviceAuth:ServiceAuth=inject(ServiceAuth)
    public user=this._serviceAuth.user

  constructor(
    private _service:ServiceEmpleados,
    private _router:Router,
  ){}

  ngOnInit(): void {
    if(!sessionStorage.getItem('token')){
      this._router.navigate(['/login']) 
    }
  }

}
