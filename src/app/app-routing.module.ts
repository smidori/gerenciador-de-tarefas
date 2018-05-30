import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefas';


export const routes : Routes=[
  {
    path: '',
    redirectTo: 'tarefas/listar',
    pathMatch: 'full'
  },
  //O ... serve para concatenar os arrays
  ...TarefaRoutes 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class AppRoutingModule { }
