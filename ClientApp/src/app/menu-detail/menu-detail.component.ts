import { Component, OnInit } from '@angular/core';
import { IMenu } from '../IMenu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  menu:IMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
