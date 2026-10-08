import { Routes } from '@angular/router';

export const routes: Routes = [

     {
          path:'Formularios',
          children:[
               {
                    path:'usuario',
                    loadComponent:()=>
                         import('./Formularios/usuario/usuario').then(
                              (c)=>c.Usuario
                         )
               },
               {
                    path:'zodiaco',
                    loadComponent:()=>
                         import('./Formularios/zodiaco/zodiaco').then(
                              (c)=>c.Zodiaco
                         )
               },
          ]
          
          
     },
     {
          path:'Escuela',
          children:[
               {
                    path:'listaAlumnos',
                    loadComponent:()=>
                         import('./Escuela/lista-alumnos/lista-alumnos').then(
                              (c)=>c.ListaAlumnos
                         )
               },
               {
                    path:'cinepolis',
                    loadComponent:()=>
                         import('./Escuela/cinepolis/cinepolis').then(
                              (c)=>c.Cinepolis
                         )
               }
          ]
     },
     {
          path:'', redirectTo: 'admin',pathMatch:'full'
     },
     {
          path:'**', redirectTo: 'admin'
     }
];
