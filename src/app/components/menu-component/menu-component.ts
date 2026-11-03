import { Component, inject } from '@angular/core';
import { ServiceAuth } from '../../services/service.auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {
public _serviceAuth:ServiceAuth=inject(ServiceAuth)

  constructor(
    private _router:Router
  ){}

  logOut():void{
    this._serviceAuth.logOut()
    this._router.navigate(['/'])
  }
}
