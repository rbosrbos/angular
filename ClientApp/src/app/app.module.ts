import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    MenuComponent,
    MenuDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
