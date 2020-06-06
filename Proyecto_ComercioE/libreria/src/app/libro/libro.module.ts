import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { LibroRoutingModule } from './libro-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CrearComponent, EditarComponent, ListarComponent],
  imports: [
    CommonModule,
    LibroRoutingModule,
    FormsModule
  ]
})
export class LibroModule { }
