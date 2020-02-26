using System;

namespace WebApi07
{
    
    public class Pessoa
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        public string Nome { get; set; }   

        public string Apelido { get; set; } 

        public decimal Saldo { get; set; } =0;
    }


}   