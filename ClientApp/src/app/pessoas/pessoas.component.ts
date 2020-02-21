import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
  public pessoa = 'Rui';
  constructor() { }

  ngOnInit(): void {
  }

}
