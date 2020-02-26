import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { IPessoa } from "src/IPessoa";
import { HttpClient } from "@angular/common/http";
import { PessoaServiceService } from '../pessoa-service.service';

@Component({
  selector: "app-pessoas",
  templateUrl: "./pessoas.component.html",
  styleUrls: ["./pessoas.component.scss"]
})
export class PessoasComponent implements OnInit {
  pessoas: IPessoa[] = [
    { id: "1", nome: "A", apelido: "A", saldo: 0 },
    { id: "2", nome: "B", apelido: "B", saldo: 1 },
    { id: "3", nome: "C", apelido: "C", saldo: 2 },
    { id: "4", nome: "D", apelido: "D", saldo: 3 },
    { id: "5", nome: "E", apelido: "E", saldo: 4 },
    { id: "6", nome: "F", apelido: "F", saldo: 5 },
    { id: "7", nome: "G", apelido: "G", saldo: 6 },
    { id: "8", nome: "H", apelido: "H", saldo: 7 }
  ];
  _db:PessoaServiceService;


  constructor(db:PessoaServiceService) {
    this._db = db;
  
  }

  ngOnInit(): void {
    this._db.select().subscribe(
      result=>{
        this.pessoas = result;
      }
    );
  }

  addClicked() {
    let i:IPessoa = { id: "5", nome: "E", apelido: "E", saldo: 4 };
    this._db.insert(i)
  }
  delClicked() {
    let i:IPessoa = { id: "5", nome: "E", apelido: "E", saldo: 4 };
    this._db.delete(i.id)
  }
}
