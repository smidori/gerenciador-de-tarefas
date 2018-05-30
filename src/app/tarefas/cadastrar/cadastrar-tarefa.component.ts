import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TarefaService, Tarefa } from '../shared';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa:NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService:TarefaService,
    private router: Router //direcionar a tela
  ) { }

  ngOnInit() {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrarTarefa(this.tarefa);
      this.router.navigate(['/tarefas'])
    }
  }

}
