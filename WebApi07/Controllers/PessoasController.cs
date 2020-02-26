using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi07;

namespace WebApi07.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private readonly PessoaService _db;
        public PessoasController(PessoaService db) {
            _db = db;
            if(_db.Pessoas.Count()==0) {
                _db.Add(new Pessoa {Nome="A", Apelido="A"});
                _db.Add(new Pessoa {Nome="B", Apelido="B"});
                _db.SaveChanges();
            }
        }
        // GET: /Pessoas
        [HttpGet]
        public IEnumerable<Pessoa> Get()
        {
            return _db.Pessoas.ToList().AsEnumerable();
        }

        // GET: /Pessoas/5
        [HttpGet("{id}", Name = "Get")]
        public Pessoa Get(string id)
        {
            return _db.Pessoas.FirstOrDefault(p=>p.Id == id);
        }

        // POST: /Pessoas
        [HttpPost]
        public void Post([FromBody] Pessoa value)
        {
            _db.Add(value);
            _db.SaveChanges();
        }

        // PUT: /Pessoas/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: /ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
