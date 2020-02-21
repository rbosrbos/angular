import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products : IProduct[] = [
    {code:"A",name:"Aa",preco: 10},
    {code:"B",name:"Bb",preco: 20}
  ];
  item : IProduct;
  constructor() { }

  ngOnInit(): void {
  }
  mostraPreco(actual:IProduct) {
    this.item = actual;
  }

}
