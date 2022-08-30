using elitstroy.Model;
using Microsoft.EntityFrameworkCore;

namespace elitstroy
{
    public class ApplicationContext : DbContext
    { 
        public DbSet<User> User { get; set; }
        public DbSet<Project> Projects { get; set; }
        
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }
        }
    }
}
