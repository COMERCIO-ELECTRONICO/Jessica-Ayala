import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-responsive',
  templateUrl: './banco-responsive.component.html',
  styleUrls: ['./banco-responsive.component.css']
})
export class BancoResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arregloMenu = [{ nombre: 'BCE' }, { nombre: 'Transparencia' }, { nombre: 'Comunicación' }, { nombre: 'Atención al Cliente' }, { nombre: 'Cuestiones Económicas' }];

}
