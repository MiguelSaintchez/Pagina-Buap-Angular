import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
//comment para probar github y dev branch
@Component({
  selector: 'app-registro-usuarios-screen',
  templateUrl: './registro-usuarios-screen.component.html',
  styleUrls: ['./registro-usuarios-screen.component.scss']
})
export class RegistroUsuariosScreenComponent implements OnInit {

  public tipo:string = "registro-usuarios";

  public user:any = {};

  public editar:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  public radioChange(event: MatRadioChange){
  
  }

}
