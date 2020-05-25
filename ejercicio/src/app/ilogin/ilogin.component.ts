import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-ilogin',
  templateUrl: './ilogin.component.html',
  styleUrls: ['./ilogin.component.css']
})
export class IloginComponent implements OnInit {

  //credenciales

  correo='';
  pass='';
  seleccionadoValor;

  valorAutocomplete=''
  sugerencias=['Jessy','Ayala','Dayana'];
  arregloResultado=[];

  constructor(
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['Jessy','Ayala','Dayana'];
    }
  }

  valorSeleccionado(evento){
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar(){
    if(this.pass === '1234'){
      alert(this.correo);
      if(this.seleccionadoValor === 'Jessy'){
        alert('es estudiante');
        this._router.navigate(
          ['/estudiante','perfil']
        )
      }
    }else{
      alert('no ingresó');
    }
  }

}
