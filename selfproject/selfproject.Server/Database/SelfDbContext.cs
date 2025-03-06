using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using selfproject.Server.Models;

namespace selfproject.Server.Database
{
    public class SelfDbContext : IdentityDbContext<ApplicationUser>
    {
        public SelfDbContext(DbContextOptions<SelfDbContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }  
    }
}
