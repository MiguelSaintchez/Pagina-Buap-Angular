import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-maestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent {
  @Input() datos_user: string = ""
  @Input() rol:string = ""

  public maestro:any= {};
  public errors:any={};

   //Para el select
  public areas: any[] = [
    {value: '1', viewValue: 'Desarrollo Web'},
    {value: '2', viewValue: 'Programación'},
    {value: '3', viewValue: 'Bases de datos'},
    {value: '4', viewValue: 'Redes'},
    {value: '5', viewValue: 'Matemáticas'},
  ];



  constructor() { }

  ngOnInit(): void {
  }
}
