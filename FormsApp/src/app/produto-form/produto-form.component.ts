import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto'

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {
modelo = new Produto("1","Monitor",200);

  constructor() { }

  ngOnInit(): void {
  }
  newProduto() {
    this.modelo = new Produto("-1","",0);
   }
}
