import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesComponent  } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
/* import { InicioComponent } from './inicio/inicio.component'; */
import { HomeComponent } from './inicio/home/home.component';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    /* InicioComponent, */
    HomeComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesComponent,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
