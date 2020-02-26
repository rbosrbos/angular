using Microsoft.EntityFrameworkCore;

namespace WebApi07 {
  public class PessoaService : DbContext {
    public PessoaService(DbContextOptions<PessoaService> options)
    :base(options)
    {

    }
    public DbSet<Pessoa> Pessoas { get; set; }
  }
}