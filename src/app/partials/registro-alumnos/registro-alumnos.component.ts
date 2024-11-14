import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})
export class RegistroAlumnosComponent {
  @Input() datos_user: string = ""
  @Input() rol:string = ""

  constructor() { }

  ngOnInit(): void {
  }
}
