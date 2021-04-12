//
import {ModuleWithProviders}    from '@angular/core';
import {Routes,RouterModule }    from '@angular/router';

///
import {PaginaComponent}    from './components/pagina/pagina.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
const appRoutes: Routes = [

    {path : '',component:PaginaComponent },
    {path:'home',component:PaginaComponent},
    {path:'form',component:FormularioComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'blog',component:BlogComponent},
    {path:'calculadora',component:CalculadoraComponent}
];
export const appRoutesProviders: any[] =[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
