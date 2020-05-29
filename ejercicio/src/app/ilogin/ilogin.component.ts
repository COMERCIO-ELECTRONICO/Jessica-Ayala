import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

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
    private readonly _loginService: LoginService
  ) { }

  ngOnInit(): void {

    this._loginService
    .metodoGet('http://localhost:1337/usuario/1')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuesta de Get');
      console.log(resultadoMetodoGet);
    });
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
    this._loginService.metodoPost(
      'http://localhost:1337/usuario',
      {
        nombre: "Jessy",
        edad: this.pass,
        correo: this.correo,
        esCasado: true
      }
    ).subscribe(
      (resultadoPost)=>{
        console.log('Respuesta de Post');
        console.log(resultadoPost);
      }
    )
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

  eliminarRegistroPorId(){
    this._loginService.metodoDelete('http://localhost:1337/usuario/2').subscribe(
      (respuestaDelete)=>{
        console.log('Respuesta de delete');
        console.log(respuestaDelete);

      }
    )
  }

}
