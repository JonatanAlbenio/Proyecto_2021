import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {



  partidad:String;
  segunda:number;
  resultado:number;


  stockD:number;
  valorUnitarioD:number;
   stockdf:number;
   stockI=30;
   erro="Error datos no concuerdan Stock de 30";
   stockp:number;





   stockS:number;
   valorunitarios:number;
   stocksIs=60;
   stocksSf:number;
  stockss:number;
  erros="Error datos no concuerdan Stock de 60";





   StockAriel:number;
   ValorunitarioAriel:number;
   stockInicialAriel=100;
   stockariell:number;
   stockarriel:number;
   errosariel="Erro datos no concuerdan Stocks de 100";





   stockClorox:number;
   valorunitarioClorxo:number;
   stockinicialClorox=10;

   stockCloroxx:number;
   stockCloroox:number;
   errorClorox="Erro Datos No concuerdan Stocks de 10";





  stockAce:number;
  valorunitarioAce:number;
  stockinicialAce=20;

  stockAace:number;
  stockAcee:number;
  erroAce="Erro Datos No concuerdan Stock de 20";


  stockAcce(){
    this.stockAace=this.stockinicialAce-this.stockAce
       if(this.stockAace<this.stockinicialClorox&&this.stockAace>=0){
         return this.stockAace;
       }else{
         return this.erroAce;
       }
  }

  stockAcce2(){
    this. stockAcee=this.stockAce*this.valorunitarioAce;
   return this. stockAcee;
   }


   stockClorox1(){
    this.stockCloroxx=this.stockinicialClorox-this.stockClorox
       if(this.stockCloroxx<this.stockinicialClorox&&this.stockCloroxx>=0){
         return this.stockCloroxx;
       }else{
         return this.errorClorox;
       }
  }
   
  stockcloroxx2(){
    this.stockCloroox=this.stockCloroxx*this.valorunitarioClorxo;
   return this.stockCloroox;
   }

   stockAriel(){
    this.stockariell=this.stockInicialAriel-this.StockAriel
       if(this.stockariell<this.stockInicialAriel&&this.stockariell>=0){
         return this.stockariell;
       }else{
         return this.errosariel;
       }
  }
stockAriell(){
 this.stockarriel=this.stockariell*this.ValorunitarioAriel;
return this.stockarriel;
}




   stockSf(){
     this.stocksSf=this.stocksIs-this.stockS;
        if(this.stocksSf<this.stocksIs&&this.stocksSf>=0){
          return this.stocksSf;
        }else{
          return this.erros;
        }
   }
stockSp(){
  this.stockss=this.stocksSf*this.valorunitarios;
 return this.stockss;
}




stockd(){
 this.stockdf=this.stockI-this.stockD;

 if ( this.stockdf<30&&this.stockdf>=0){
 
  return this.stockdf;
 }else{
   return this.erro;
 }
 
}
stockP(){
  this.stockp=this.stockdf*this.valorUnitarioD;
  return this.stockp;
}





  pasoD():Boolean{

    if (this.stockD>=0&&this.valorUnitarioD>=0){
      return true;
    }else{
      return false;
    }
  }





  pasoS():Boolean{

    if (this.stockS>=0&&this.valorunitarios>=0){
      return true;
    }else{
      return false;
    }
  }

  pasoAriel():Boolean{

    if (this.StockAriel>=0&&this.ValorunitarioAriel>=0){
      return true;
    }else{
      return false;
    }
  }

  pasoclorox():Boolean{

    if (this.stockClorox>=0&&this.valorunitarioClorxo>=0){
      return true;
    }else{
      return false;
    }
  }

  pasoAce():Boolean{

    if (this.stockAce>=0&&this.valorunitarioAce>=0){
      return true;
    }else{
      return false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
