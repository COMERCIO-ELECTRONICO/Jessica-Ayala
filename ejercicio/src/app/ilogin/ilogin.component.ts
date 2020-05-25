import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private readonly _router: Router ,
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
        alert('Es Estudiante');
        this._router.navigate(
          ['/estudiante','perfil']
        )
      }
    }else if(this.pass === '4321'){
      alert(this.correo);
      if(this.seleccionadoValor === 'Dayana'){
        alert('Es Profesor/a');
        this._router.navigate(
          ['/profesor','perfil']
        )
      }
    }else{
      alert('no ingresó');
    }
  }

}
