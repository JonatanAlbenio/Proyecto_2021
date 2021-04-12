import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {



  mama2 = 'hola';
  numero =5;
  
    public user: any;

  Validacion(){
    if (this.mama2=='hola'){
      return "hola";
    }
  }


Duplicar(valor: string): string{
return valor + valor;
}
  constructor() { 

    this.user ={
      nombre:'juan',
      apellidos: 'perez',
      nacionalidad: 'colombia',
      genero: 'masculino',
      numeros:0

    };
  }

 

  positivo():boolean{
    if (this.user.numeros>=0){
      return true;

    }else{
      return false;
    }
  }



  ngOnInit(): void {
  }

}
