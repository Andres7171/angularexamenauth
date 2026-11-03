import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { User } from '../../models/user';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Router } from '@angular/router';
import { ServiceAuth } from '../../services/service.auth';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  public usuario: User = new User('', '');
  private _serviceAuth:ServiceAuth=inject(ServiceAuth)
  constructor(
    private _service: ServiceEmpleados,
    private _cdr: ChangeDetectorRef,
    private _router:Router
  ) {}

  checkLogin(): void {
    this._service.authUser(this.usuario).subscribe(response=>{
      this._serviceAuth.login(response.response)
      this._router.navigate(['/'])
    })
  }
}
