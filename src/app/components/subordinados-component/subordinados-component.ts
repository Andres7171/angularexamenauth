import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit{
  public subordinados!:Empleado[]
  constructor(
    private _service:ServiceEmpleados,
    private _cdr:ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this._service.getSubordinados().subscribe(response=>{
      this.subordinados=response
      this._cdr.detectChanges()
    })
  }

}
