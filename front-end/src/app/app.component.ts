import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  
  titulo = 'soy tu padre';
  nombreBoton = 'alerta';
  imagen = 'https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg';
   
  obtenerRespuestaHijo(evento) {
  console.log(evento)
 }
}
