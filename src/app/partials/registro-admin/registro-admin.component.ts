import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {
  @Input() datos_user: string = ""
  @Input() rol:string = ""

  constructor() { }

  ngOnInit(): void {
  }
}
