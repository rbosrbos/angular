import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaFormComponent,
    ProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
