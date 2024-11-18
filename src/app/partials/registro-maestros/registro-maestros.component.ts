import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registro-maestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent {
  @Input() datos_user: string = ""
  @Input() rol:string = ""

  constructor() { }

  ngOnInit(): void {
  }
}
