import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa:NgForm;
  tarefa: Tarefa;

  constructor(    
    private tarefaService: TarefaService,    
    private route:ActivatedRoute, //utilizado para obter os parametros da url
    private router: Router //direcionar a tela
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //+ faz a conversão para número
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
