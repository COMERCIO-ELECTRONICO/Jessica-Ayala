import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { IloginComponent } from './ilogin/ilogin.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    IloginComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
