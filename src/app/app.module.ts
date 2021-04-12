import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutesProviders} from './app.routing';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { from } from 'rxjs';
import { BlogComponent } from './components/blog/blog.component';
import { RapidoComponent } from './components/rapido/rapido.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    SliderComponent,
    FormularioComponent,
    ContactoComponent,
    BlogComponent,
    RapidoComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule

  ],
  providers: [appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
