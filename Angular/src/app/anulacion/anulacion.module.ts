import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AnulacionComponent } from './anulacion.component';

@NgModule({
  declarations: [AnulacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClient
  ]
})
export class AnulacionModule { }