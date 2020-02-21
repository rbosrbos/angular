import { Component, OnInit } from "@angular/core";
import { IMenu } from "../IMenu";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  menus: IMenu[] = [
    { id: 1, item: "Home" },
    { id: 2, item: "Serviços" },
    { id: 3, item: "About" }
  ];

  menuEscolhido: IMenu;

  constructor() {}

  ngOnInit(): void {}

  onSelect(item: IMenu) {
    this.menuEscolhido = item;
  }
}
