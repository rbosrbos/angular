export class Pessoa {
  /**
   *
   */
  constructor(
    public id:string, 
    public nome:string,
    public saldo:number,
    public apelido?: string
    ) { }
}
