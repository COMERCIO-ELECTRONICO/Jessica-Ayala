import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate{
  constructor(){}

  canActivate():boolean{
    //Aqui lógica
    const valorLocal = JSON
    .parse(localStorage.getItem('nombre'));
    if(valorLocal.nombre === 'Jessy'){
      return true;
    }else{
      return false;
    }
  }
}
