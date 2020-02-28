import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa'

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {
  apelidos = ['Amaral', 'Pereira', 'Almeida', 'Viegas'];
  modelo = new Pessoa("1","A",0,this.apelidos[0]);
  submetido = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submetido  = true;
  }
  newPessoa() {
   this.modelo = new Pessoa('-1','',0,'');
  }
}
