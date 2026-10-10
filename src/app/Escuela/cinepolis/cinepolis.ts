import { Component, OnInit } from '@angular/core';
import { ICinepoli } from '../cinepoli';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit{
  formulario!:FormGroup
  precioBoleto:number=12
  total:number=0
  descuento:number=0
  


  cinepolis:ICinepoli[]=[]
  nuevoCinepolis:ICinepoli={
    nombre:'xx',
    cantidad:0,
    tarjeta:'xx',
    boletos:0,
    Pagar:0,
    error:''

  }
  ngOnInit():void{
      this.formulario=new FormGroup({
      nombre:new FormControl(''),
      cantidad:new FormControl(''),
      tarjeta:new FormControl(''),
      boletos:new FormControl(''),
      Pagar:new FormControl(''),
    })
  }
  muestraCinepolis():void{
    this.nuevoCinepolis.nombre=this.formulario.value.nombre
    this.nuevoCinepolis.cantidad=this.formulario.value.cantidad
    this.nuevoCinepolis.tarjeta=this.formulario.value.tarjeta
    this.nuevoCinepolis.boletos=this.formulario.value.boletos
    this.salidaCinepolis()
  }

  salidaCinepolis():void{
    this.total = this.nuevoCinepolis.boletos * this.precioBoleto
    if (this.nuevoCinepolis.boletos <= (this.nuevoCinepolis.cantidad * 7)) {
      if (this.nuevoCinepolis.boletos > 5) {
        this.descuento= this.total * 0.15
      }
      if (this.nuevoCinepolis.boletos >= 3 && this.nuevoCinepolis.boletos <= 5) {
        this.descuento = this.total * 0.10
      }
      if (this.nuevoCinepolis.boletos <= 2) {
        this.descuento = 0
      }
      this.nuevoCinepolis.Pagar = this.total - this.descuento
      if (this.nuevoCinepolis.tarjeta == 'si') {
        this.nuevoCinepolis.Pagar = this.nuevoCinepolis.Pagar - (this.nuevoCinepolis.Pagar * 0.10)
      }
    }
    else{
      this.nuevoCinepolis.Pagar = 0
      this.nuevoCinepolis.error='Maximo numero de boletos por comprador son 7'
    }
  }
  
}
