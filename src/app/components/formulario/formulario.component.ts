import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  suma:number;
  suma2:number;
  valor:number;
  suma3 :number;
  public usuario : any;

  constructor () { 
    this.usuario={
      nombre: '',
      apellido: '',
       edad :0,
       algebra:0,
       quimica:0,
       fisica:0,
       suma:0
                   
    };
  }

  edad (){
    if (this.usuario.edad<18 ){
               return 'Es menor de edad_ ';
    }else{
      return 'Es mayor de edad ';
    }
  }
  quimica(){
    if (this.usuario.quimica<3){
      return 'No ha pasado Quimica';
   }else if (this.usuario.quimica<=5&&this.usuario.quimica>=3){
     return 'Ha pasado Quimica ';

   }else{
     return 'Datos no logicos';
   }
  }

  fisica(){
    if (this.usuario.fisica<3){
      return 'No ha pasado fisica';
   }else if (this.usuario.fisica<=5&&this.usuario.fisica>=3){
     return 'Ha pasado fisica ';

   }else{
     return 'Datos no logicos';
   }
  }


  materia(){
    if (this.usuario.algebra<3){
       return 'No ha pasado Algebra';
    }else if (this.usuario.algebra<=5&&this.usuario.algebra>=3){
      return 'Ha pasado Algebra ';

    }else{
      return 'Datos no logicos';
    }
   
  }
 calculo(){
 
  
    this.valor=this.suma2+this.suma+this.suma3;
    this.valor = this.valor /3;
    if (this.valor>=3){
      return 'Ha pasado el semestre sus notas fueron mayor de 3 o iguales '+ this.valor;
    }else{
      return 'Notas menor que 3 No ha pasado el semestre '+ this.valor;
    }
 
 }
  
  ngOnInit(): void {
  
  
    

  }

}
