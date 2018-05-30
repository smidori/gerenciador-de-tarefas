import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { TarefasModule } from './tarefas';
//import { TarefaConcluidaDirective } from './tarefas/shared/tarefa-concluida.directive';

@NgModule({
  declarations: [
    AppComponent
    //,TarefaConcluidaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
