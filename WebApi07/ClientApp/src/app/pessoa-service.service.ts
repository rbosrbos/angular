import { Injectable, Inject } from '@angular/core';
import { IPessoa } from '../IPessoa';
import { HttpClient } from "@angular/common/http";
import { of, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

_http: HttpClient;
_baseURL:string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseURL:string) {
    this._baseURL = baseURL;
    this._http = http;
  }

// Gestão de erros
  private handleError<T>(operation='operacao', result?: T) {
    return(error:any):Observable<T>=>{
      console.error(error);
      return of(result as T);
    }
  }

// Implementam os crud method (create, read, update & delete) 
  select():Observable<IPessoa[]> {
    return this._http.get<IPessoa[]>(this._baseURL + "pessoas").pipe(
      catchError(this.handleError('SELECT', [])));
  }
  findById(id:string):Observable<IPessoa[]> {
    return this._http.get<IPessoa>(this._baseURL + "pessoas/"+id).pipe(
      this.handleError('FIND BY ID', []));
  }
  insert(item:IPessoa):Observable<IPessoa[]> {
    return this._http.post<IPessoa>(this._baseURL + "pessoas/",item).pipe(
      this.handleError('POST', []));
  }
  update(item:IPessoa):Observable<IPessoa[]> {
    return this._http.put<IPessoa>(this._baseURL + "pessoas/"+item.id,item).pipe(
      this.handleError('PUT', []));
  }
  delete(id:string):Observable<IPessoa[]> {
    return this._http.delete<IPessoa>(this._baseURL + "pessoas/"+id).pipe(
      this.handleError('DELETE BY ID'+id, []));
  }
}
